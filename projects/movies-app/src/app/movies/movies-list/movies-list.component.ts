import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BaseRequest, MovieDTO } from '@movies-app/api';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormDialogData } from '../../@shared/common/@models/create-dialog.models';
import { DataTableColumn } from '../../@shared/common/@models/data-table';
import { CreateDialogComponent } from '../../@shared/common/components/create-dialog/create-dialog.component';
import { MoviesFacadeService } from '../movies.facade.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent implements OnInit {

  movieColumns: DataTableColumn[] = [
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
      columnDef: 'runtime',
      header: 'Runtime (minutes)',
      cell: (element) => `${element.runtime || ''}`
    }
  ];
  movieData$: Observable<MovieDTO[]>;
  movieDisplayColumns: string[];
  totalMovies$: Observable<number>;
  pageSize$: BehaviorSubject<number>;
  pageIndex$: BehaviorSubject<number>;

  constructor(
    private moviesFacadeService: MoviesFacadeService,
    private dialog: MatDialog,
    private fb: UntypedFormBuilder
  ) {
    this.movieData$ = this.moviesFacadeService.movies$;
    this.movieDisplayColumns = this.movieColumns.map(c => c.columnDef);
    this.totalMovies$ = this.moviesFacadeService.totalMovies$;
    this.pageSize$ = this.moviesFacadeService.pageSize$;
    this.pageIndex$ = this.moviesFacadeService.page$;
   }

  ngOnInit(): void {
    this.onPageChange({
      size: this.pageSize$.value,
      page: this.pageIndex$.value
    });
  }

  onPageChange(event: BaseRequest) {
    this.moviesFacadeService.loadMovies({
      size: event.size,
      page: event.page
    });
  }

  onAddMovie(): void {
    const form: FormDialogData[] = [
      {
        label: 'Name',
        controlName: 'name',
        controlType: 'text',
        control: this.fb.group(
          { name: ['', [Validators.required]] }
        )
      },
      {
        label: 'Runtime',
        controlName: 'runtime',
        controlType: 'number',
        control: this.fb.group(
          { runtime: [null, [Validators.min(0)]]}
        )
      }
    ];
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '25rem',
      data: { title: 'Create movie' , form }
    });

    dialogRef.afterClosed().subscribe((result: FormDialogData) => {
      if (result) {
        this.moviesFacadeService.createMovie({
          name: result[0].control.get('name').value,
          runtime: result[1].control.get('runtime').value
        });
      }
    })
  }

}
