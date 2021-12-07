import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BaseRequest, CinemaDTO } from '@ultraplex-app/api';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataTableColumn } from '../../@shared/common/@models/data-table';
import { CinemasFacadeService } from '../cinemas.facade.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { CreateDialogComponent } from '../../@shared/common/components/create-dialog/create-dialog.component';
import { FormDialogData } from '../../@shared/common/@models/create-dialog.models';
import { Router } from '@angular/router';
import { ScreensFacadeService } from '../screens-list/screens.facade.service';

@Component({
  selector: 'app-cinemas-list',
  templateUrl: './cinemas-list.component.html',
  styleUrls: ['./cinemas-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CinemasListComponent implements OnInit {

  cinemaColumns: DataTableColumn[] = [
    {
      columnDef: 'id',
      header: 'Id',
      cell: (element) => `${element.id}`
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element) => `${element.name || ''}`
    },
    {
      columnDef: 'actions',
      header: 'Actions',
      actions: [
        { label: 'View Screens', action: (element: CinemaDTO) => this.viewCinemaScreens(element)},
        { label: 'Add Screen', action: (element: CinemaDTO) => this.addCinemaScreen(element)}
      ]
    }
  ];
  cinemaData$: Observable<CinemaDTO[]>;
  cinemaDisplayColumns: string[];
  totalCinemas$: Observable<number>;
  pageSize$: BehaviorSubject<number>;
  pageIndex$: BehaviorSubject<number>;

  constructor(
    private cinemasFacadeService: CinemasFacadeService,
    private screensFacadeService: ScreensFacadeService,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.cinemaData$ = this.cinemasFacadeService.cinemas$;
    this.cinemaDisplayColumns = this.cinemaColumns.map(c => c.columnDef);
    this.totalCinemas$ = this.cinemasFacadeService.totalCinemas$;
    this.pageSize$ = this.cinemasFacadeService.pageSize$;
    this.pageIndex$ = this.cinemasFacadeService.page$;
  }

  ngOnInit(): void {
    this.onPageChange({
      size: this.pageSize$.value,
      page: this.pageIndex$.value
    });
  }

  onPageChange(event: BaseRequest) {
    this.cinemasFacadeService.loadCinemas({
      size: event.size,
      page: event.page
    });
  }

  onAddCinema(): void {
    const form: FormDialogData[] = [
      {
        label: 'Name',
        controlName: 'name',
        controlType: 'text',
        control: this.fb.group(
          { name: ['', [Validators.required]] }
        )
      }
    ];
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '25rem',
      data: { title: 'Create cinema' , form }
    });

    dialogRef.afterClosed().subscribe((result: FormDialogData) => {
      if (result) {
        this.cinemasFacadeService.createCinema({
          name: result[0].control.get('name').value
        });
      }
    })
  }

  viewCinemaScreens(element: CinemaDTO) {
    this.router.navigate([`cinemas/${element.id}/screens`, { name: element.name }])
  }

  addCinemaScreen(element: CinemaDTO) {
    this.screensFacadeService.addScreenDialog(element.id);
  }

}
