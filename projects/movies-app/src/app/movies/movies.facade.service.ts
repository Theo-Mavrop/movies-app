import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BaseRequest, CRUDMovieRequest, MovieDTO, SearchRequest } from '@movies-app/api';
import { CreateMovie, DeleteMovie, EditMovie, getCreateMovieError, getDeleteMovieError, getEditMovieError, getMovie, GetMovie, getMovieError, getMoviesError, IMoviesState, isMovieCreated, isMovieDeleted, isMovieUpdated, LoadMovies, SearchMovies, selectMovies, selectMoviesTotal, getMovieSucceed } from '@movies-app/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class MoviesFacadeService {

  movies$: Observable<MovieDTO[]>;
  movie$: Observable<MovieDTO>;
  totalMovies$: Observable<number>;
  pageSize$: BehaviorSubject<number>;
  page$: BehaviorSubject<number>;
  getMovieSucceed$: Observable<boolean>;
  showPaging$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  movieError$: Observable<Error>;
  moviesError$: Observable<Error>;
  createMovieError$: Observable<Error>;
  updateMovieError$: Observable<Error>;
  deleteMovieError$: Observable<Error>;
  movieCreated$: Observable<boolean>;
  movieUpdated$: Observable<boolean>;
  movieDeleted$: Observable<boolean>;

  constructor(
    private store: Store<IMoviesState>
  ) {
    this.movies$ = this.store.pipe(select(selectMovies));
    this.movie$ = this.store.pipe(select(getMovie));
    this.totalMovies$ = this.store.pipe(select(selectMoviesTotal));
    this.getMovieSucceed$ = this.store.pipe(select(getMovieSucceed));
    this.pageSize$ = new BehaviorSubject(10);
    this.page$ = new BehaviorSubject(0);
    this.movieError$ = this.store.pipe(select(getMovieError));
    this.moviesError$ = this.store.pipe(select(getMoviesError));
    this.createMovieError$ = this.store.pipe(select(getCreateMovieError));
    this.updateMovieError$ = this.store.pipe(select(getEditMovieError));
    this.deleteMovieError$ = this.store.pipe(select(getDeleteMovieError));
    this.movieCreated$ = this.store.pipe(select(isMovieCreated));
    this.movieUpdated$ = this.store.pipe(select(isMovieUpdated));
    this.movieDeleted$ = this.store.pipe(select(isMovieDeleted));
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
