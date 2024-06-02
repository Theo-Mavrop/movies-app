import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
    },
    {
      columnDef: 'actions',
      header: 'Actions',
      actions: [
        { label: 'View', action: (element: MovieDTO) => this.viewMovieDetails(element)},
        { label: 'Edit', action: (element: MovieDTO) => this.onAddEditMovie(element)},
        { label: 'Delete', action: (element: MovieDTO) => this.deleteMovie(element)},
      ]
    }
  ];
  movieData$: Observable<MovieDTO[]>;
  movieDisplayColumns: string[];
  totalMovies$: Observable<number>;
  pageSize$: BehaviorSubject<number>;
  pageIndex$: BehaviorSubject<number>;
  showPaging$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(
    private moviesFacadeService: MoviesFacadeService,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router
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
    this.showPaging$.next(true);
    this.moviesFacadeService.loadMovies({
      size: event.size,
      page: event.page
    });
  }

  onSearch(text: string) {
    if (text) {
      this.showPaging$.next(false);
      this.moviesFacadeService.searchMovies({
        text
      });
    } else {
      this.showPaging$.next(true);
      this.onPageChange({
        size: this.pageSize$.value,
        page: this.pageIndex$.value
      });
    }
  }

  onAddEditMovie(movie: MovieDTO): void {
    const form: FormDialogData[] = [
      {
        label: 'Name',
        controlName: 'name',
        controlType: 'text',
        control: this.fb.group(
          { name: [movie?.name, [Validators.required]] }
        )
      },
      {
        label: 'Runtime',
        controlName: 'runtime',
        controlType: 'number',
        control: this.fb.group(
          { runtime: [movie?.runtime, [Validators.min(0)]]}
        )
      },
      {
        label: 'Description',
        controlName: 'description',
        controlType: 'textarea',
        control: this.fb.group(
          { description: [movie?.description, []]}
        )
      },
      {
        label: 'Director',
        controlName: 'director',
        controlType: 'text',
        control: this.fb.group(
          { director: [movie?.director, []]}
        )
      },
      {
        label: 'Actors',
        controlName: 'actors',
        controlType: 'textarea',
        control: this.fb.group(
          { actors: [movie?.actors, []]}
        )
      }
    ];
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      // width: '26rem',
      data: { title: movie ? 'Edit movie' : 'Create movie' , form }
    });

    dialogRef.afterClosed().subscribe((result: FormDialogData) => {
      if (result) {
        if (!movie) {
          this.moviesFacadeService.createMovie({
            name: result[0].control.get('name').value,
            runtime: result[1].control.get('runtime').value,
            id: null,
            actors: result[2].control.get('description').value,
            description: result[3].control.get('director').value,
            director: result[4].control.get('actors').value
          });
        } else {
          this.moviesFacadeService.editMovie({
            name: result[0].control.get('name').value,
            runtime: result[1].control.get('runtime').value,
            id: movie.id,
            actors: result[2].control.get('description').value,
            description: result[3].control.get('director').value,
            director: result[4].control.get('actors').value
          });
        }
      }
    })
  }

  deleteMovie(movie: MovieDTO) {
    this.moviesFacadeService.deleteMovie(movie)
  }

  viewMovieDetails(movie: MovieDTO) {
    this.router.navigate([`movies/${movie.id}`])
  }
}
