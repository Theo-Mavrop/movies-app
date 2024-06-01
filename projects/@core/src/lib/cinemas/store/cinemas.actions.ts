import { Action } from '@ngrx/store';
import { BaseCreateRequest, BaseRequest, BaseResponse, CinemaDTO } from '@movies-app/api';

export enum ECinemasActions {
  LoadCinemas = '[Cinemas] Load cinemas',
  CinemasLoaded = '[Cinemas] Loaded cinemas',
  CinemasLoadedFailed = '[Cinemas] Load cinemas failed',
  CreateCinema = '[Cinemas] Create cinema',
  CreateCinemaSuccess = '[Cinemas] Create cinema success',
  CreateCinemaFail = '[Cinemas] Create cinema failed'
}

export class LoadCinemas implements Action {
  readonly type = ECinemasActions.LoadCinemas;

  constructor(public payload: BaseRequest) {}
}

export class CinemasLoaded implements Action {
  readonly type = ECinemasActions.CinemasLoaded;

  constructor(public payload: BaseResponse<CinemaDTO>) {}
}

export class CinemasLoadedFailed implements Action {
  readonly type = ECinemasActions.CinemasLoadedFailed;

  constructor(public payload: Error) {
  }
}

export class CreateCinema implements Action {
  readonly type = ECinemasActions.CreateCinema;

  constructor(public payload: BaseCreateRequest) {}
}

export class CreateCinemaSuccess implements Action {
  readonly type = ECinemasActions.CreateCinemaSuccess;
}

export class CreateCinemaFail implements Action {
  readonly type = ECinemasActions.CreateCinemaFail;

  constructor(public payload: Error) {}
}

export type CinemasActions =
  | LoadCinemas
  | CinemasLoadedFailed
  | CinemasLoaded
  | CreateCinema
  | CreateCinemaSuccess
  | CreateCinemaFail;
