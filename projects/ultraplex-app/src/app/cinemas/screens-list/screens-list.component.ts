import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BaseRequest, ScreenDTO } from '@ultraplex-app/api';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormDialogData } from '../../@shared/common/@models/create-dialog.models';
import { DataTableColumn } from '../../@shared/common/@models/data-table';
import { CreateDialogComponent } from '../../@shared/common/components/create-dialog/create-dialog.component';
import { ScreensFacadeService } from './screens.facade.service';

@Component({
  selector: 'app-screens-list',
  templateUrl: './screens-list.component.html',
  styleUrls: ['./screens-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScreensListComponent implements OnInit {

  screensColumns: DataTableColumn[] = [
    {
      columnDef: 'id',
      header: 'Id',
      cell: (element) => `${element.id}`
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element) => `${element.name || ''}`
    }
  ];
  screensData$: Observable<ScreenDTO[]>;
  screensDisplayColumns: string[];
  totalScreens$: Observable<number>;
  pageSize$: BehaviorSubject<number>;
  pageIndex$: BehaviorSubject<number>;
  cinemaName: string;
  cinemaId: string;

  constructor(
    private screensFacadeService: ScreensFacadeService,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.screensData$ = this.screensFacadeService.screens$;
    this.screensDisplayColumns = this.screensColumns.map(c => c.columnDef);
    this.totalScreens$ = this.screensFacadeService.totalScreens$;
    this.pageSize$ = this.screensFacadeService.pageSize$;
    this.pageIndex$ = this.screensFacadeService.page$;
   }

  ngOnInit(): void {
    this.cinemaId = this.route.snapshot.paramMap.get('cinemaId');
    this.screensFacadeService.cinemaId = this.cinemaId;
    this.onPageChange({
      size: this.pageSize$.value,
      page: this.pageIndex$.value
    });
  }


  onPageChange(event: BaseRequest) {
    this.screensFacadeService.loadScreens({
      cinemaId: this.cinemaId,
      size: event.size,
      page: event.page
    });
  }

  onAddScreen(): void {
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
        this.screensFacadeService.createScreen({
          cinemaId: this.cinemaId,
          name: result[0].control.get('name').value
        });
      }
    })
  }

}
