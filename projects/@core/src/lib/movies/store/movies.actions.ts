import { Action } from '@ngrx/store';
import { BaseRequest, BaseResponse, CreateMovieRequest, MovieDTO } from '@movies-app/api';

export enum EMoviesActions {
  LoadMovies = '[Movies] Load Movies',
  MoviesLoaded = '[Movies] Loaded Movies',
  MoviesLoadedFailed = '[Movies] Load Movies failed',
  CreateMovie = '[Movies] Create Movie',
  CreateMovieSuccess = '[Movies] Create Movie success',
  CreateMovieFail = '[Movies] Create Movie failed'
}

export class LoadMovies implements Action {
  readonly type = EMoviesActions.LoadMovies;

  constructor(public payload: BaseRequest) {}
}

export class MoviesLoaded implements Action {
  readonly type = EMoviesActions.MoviesLoaded;

  constructor(public payload: BaseResponse<MovieDTO>) {}
}

export class MoviesLoadedFailed implements Action {
  readonly type = EMoviesActions.MoviesLoadedFailed;

  constructor(public payload: Error) {
  }
}

export class CreateMovie implements Action {
  readonly type = EMoviesActions.CreateMovie;

  constructor(public payload: CreateMovieRequest) {}
}

export class CreateMovieSuccess implements Action {
  readonly type = EMoviesActions.CreateMovieSuccess;
}

export class CreateMovieFail implements Action {
  readonly type = EMoviesActions.CreateMovieFail;

  constructor(public payload: Error) {}
}

export type MoviesActions =
  | LoadMovies
  | MoviesLoadedFailed
  | MoviesLoaded
  | CreateMovie
  | CreateMovieSuccess
  | CreateMovieFail;
