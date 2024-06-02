import { Action } from '@ngrx/store';
import { BaseRequest, BaseResponse, CRUDMovieRequest, MovieDTO, SearchRequest } from '@movies-app/api';

export enum EMoviesActions {
  LoadMovies = '[Movies] Load Movies',
  MoviesLoaded = '[Movies] Loaded Movies',
  MoviesLoadedFailed = '[Movies] Load Movies failed',
  GetMovie = '[Movies] Get Movie',
  MovieLoaded = '[Movies] Loaded Movie',
  MovieLoadedFailed = '[Movies] Load Movie failed',
  SearchMovies = '[Movies] Search Movies',
  SearchMoviesLoaded = '[Movies] Search Movies Loaded',
  SearchMoviesFailed = '[Movies] Search Movies failed',
  CreateMovie = '[Movies] Create Movie',
  CreateMovieSuccess = '[Movies] Create Movie success',
  CreateMovieFail = '[Movies] Create Movie failed',
  EditMovie = '[Movies] Edit Movie',
  EditMovieSuccess = '[Movies] Edit Movie success',
  EditMovieFail = '[Movies] Edit Movie failed',
  DeleteMovie = '[Movies] Delete Movie',
  DeleteMovieSuccess = '[Movies] Delete Movie success',
  DeleteMovieFail = '[Movies] Delete Movie failed'
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

export class GetMovie implements Action {
  readonly type = EMoviesActions.GetMovie;

  constructor(public payload: BaseRequest) {}
}

export class MovieLoaded implements Action {
  readonly type = EMoviesActions.MovieLoaded;

  constructor(public payload: MovieDTO) {}
}

export class MovieLoadedFailed implements Action {
  readonly type = EMoviesActions.MovieLoadedFailed;

  constructor(public payload: Error) {
  }
}

export class SearchMovies implements Action {
  readonly type = EMoviesActions.SearchMovies;

  constructor(public payload: SearchRequest) {}
}

export class SearchMoviesLoaded implements Action {
  readonly type = EMoviesActions.SearchMoviesLoaded;

  constructor(public payload: MovieDTO[]) {}
}

export class SearchMoviesFailed implements Action {
  readonly type = EMoviesActions.SearchMoviesFailed;

  constructor(public payload: Error) {
  }
}

export class CreateMovie implements Action {
  readonly type = EMoviesActions.CreateMovie;

  constructor(public payload: CRUDMovieRequest) {}
}

export class CreateMovieSuccess implements Action {
  readonly type = EMoviesActions.CreateMovieSuccess;
}

export class CreateMovieFail implements Action {
  readonly type = EMoviesActions.CreateMovieFail;

  constructor(public payload: Error) {}
}

export class EditMovie implements Action {
  readonly type = EMoviesActions.EditMovie;

  constructor(public payload: CRUDMovieRequest) {}
}

export class EditMovieSuccess implements Action {
  readonly type = EMoviesActions.EditMovieSuccess;
}

export class EditMovieFail implements Action {
  readonly type = EMoviesActions.EditMovieFail;

  constructor(public payload: Error) {}
}

export class DeleteMovie implements Action {
  readonly type = EMoviesActions.DeleteMovie;

  constructor(public payload: CRUDMovieRequest) {}
}

export class DeleteMovieSuccess implements Action {
  readonly type = EMoviesActions.DeleteMovieSuccess;
}

export class DeleteMovieFail implements Action {
  readonly type = EMoviesActions.DeleteMovieFail;

  constructor(public payload: Error) {}
}

export type MoviesActions =
  | LoadMovies
  | MoviesLoadedFailed
  | MoviesLoaded
  | GetMovie
  | MovieLoadedFailed
  | MovieLoaded
  | SearchMovies
  | SearchMoviesLoaded
  | SearchMoviesFailed
  | CreateMovie
  | CreateMovieSuccess
  | CreateMovieFail
  | EditMovie
  | EditMovieSuccess
  | EditMovieFail
  | DeleteMovie
  | DeleteMovieSuccess
  | DeleteMovieFail;
