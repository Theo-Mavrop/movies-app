import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BaseRequest, CreateMovieRequest, MovieDTO } from '@movies-app/api';
import { CreateMovie, getCreateMovieError, getMoviesError, IMoviesState, isMovieCreated, LoadMovies, selectMovies, selectMoviesTotal, selectPage, selectPageSize } from '@movies-app/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { SnackBarService } from '../@shared/common/services/snackbar.service';

@Injectable()
export class MoviesFacadeService {

  movies$: Observable<MovieDTO[]>;
  totalMovies$: Observable<number>;
  pageSize$: BehaviorSubject<number>;
  page$: BehaviorSubject<number>;

  constructor(
    private store: Store<IMoviesState>,
    private snackbarService: SnackBarService
  ) {
    this.movies$ = this.store.pipe(select(selectMovies));
    this.totalMovies$ = this.store.pipe(select(selectMoviesTotal));
    this.pageSize$ = new BehaviorSubject(10);
    this.page$ = new BehaviorSubject(0);

    this.store.pipe(
      select(getMoviesError),
      filter(val => val !== null)
    ).subscribe((error) => {
      this.snackbarService.openSnackBar('Failed to load movies', 'error')
    });

    this.store.pipe(
      select(isMovieCreated),
      filter(val => val !== null && val)
    ).subscribe((done) => {
      this.loadMovies({
        page: this.page$.value,
        size: this.pageSize$.value
      });
      this.snackbarService.openSnackBar('Movie was created successfully!!!', 'success');
    });
    this.store.pipe(
      select(getCreateMovieError),
      filter(val => val !== null)
    ).subscribe((error) => {
      this.snackbarService.openSnackBar('Error while creating movie', 'error');
    });
  }

  loadMovies(payload: BaseRequest) {
    this.page$.next(payload.page);
    this.store.dispatch(new LoadMovies(payload));
  }

  createMovie(payload: CreateMovieRequest) {
    this.store.dispatch(new CreateMovie(payload))
  }
}
