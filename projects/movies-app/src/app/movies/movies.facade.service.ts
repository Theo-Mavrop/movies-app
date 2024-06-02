import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BaseRequest, CRUDMovieRequest, MovieDTO, SearchRequest } from '@movies-app/api';
import { CreateMovie, DeleteMovie, EditMovie, getCreateMovieError, getDeleteMovieError, getEditMovieError, getMovie, GetMovie, getMovieError, getMoviesError, IMoviesState, isMovieCreated, isMovieDeleted, isMovieUpdated, LoadMovies, SearchMovies, selectMovies, selectMoviesTotal, getMovieSucceed } from '@movies-app/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { SnackBarService } from '../@shared/common/services/snackbar.service';

@Injectable()
export class MoviesFacadeService {

  movies$: Observable<MovieDTO[]>;
  movie$: Observable<MovieDTO>;
  totalMovies$: Observable<number>;
  pageSize$: BehaviorSubject<number>;
  page$: BehaviorSubject<number>;
  getMovieSucceed$: Observable<boolean>;

  constructor(
    private store: Store<IMoviesState>,
    private snackbarService: SnackBarService
  ) {
    this.movies$ = this.store.pipe(select(selectMovies));
    this.movie$ = this.store.pipe(select(getMovie));
    this.totalMovies$ = this.store.pipe(select(selectMoviesTotal));
    this.getMovieSucceed$ = this.store.pipe(select(getMovieSucceed));
    this.pageSize$ = new BehaviorSubject(10);
    this.page$ = new BehaviorSubject(0);

    this.store.pipe(
      select(getMoviesError),
      filter(val => val !== null)
    ).subscribe((error) => {
      this.snackbarService.openSnackBar('Failed to load movies', 'error')
    });

    this.store.pipe(
      select(getMovieError),
      filter(val => val !== null)
    ).subscribe((error) => {
      this.snackbarService.openSnackBar('Failed to load movie', 'error')
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

    this.store.pipe(
      select(isMovieUpdated),
      filter(val => val !== null && val)
    ).subscribe((done) => {
      this.loadMovies({
        page: this.page$.value,
        size: this.pageSize$.value
      });
      this.snackbarService.openSnackBar('Movie was updated successfully!!!', 'success');
    });
    this.store.pipe(
      select(getEditMovieError),
      filter(val => val !== null)
    ).subscribe((error) => {
      this.snackbarService.openSnackBar('Error while edditing movie', 'error');
    });

    this.store.pipe(
      select(isMovieDeleted),
      filter(val => val !== null && val)
    ).subscribe((done) => {
      this.loadMovies({
        page: this.page$.value,
        size: this.pageSize$.value
      });
      this.snackbarService.openSnackBar('Movie was deleted successfully!!!', 'success');
    });
    this.store.pipe(
      select(getDeleteMovieError),
      filter(val => val !== null)
    ).subscribe((error) => {
      this.snackbarService.openSnackBar('Error while deleting movie', 'error');
    });
  }

  loadMovies(payload: BaseRequest) {
    this.page$.next(payload.page);
    this.store.dispatch(new LoadMovies(payload));
  }

  loadMovie(payload: BaseRequest) {
    this.store.dispatch(new GetMovie(payload));
  }

  searchMovies(payload: SearchRequest) {
    this.page$.next(0);
    this.store.dispatch(new SearchMovies(payload));
  }

  createMovie(payload: CRUDMovieRequest) {
    this.store.dispatch(new CreateMovie(payload))
  }

  editMovie(payload: CRUDMovieRequest) {
    this.store.dispatch(new EditMovie(payload))
  }

  deleteMovie(payload: CRUDMovieRequest) {
    this.store.dispatch(new DeleteMovie(payload))
  }
}
