import { Action } from '@ngrx/store';
import { BaseRequest, BaseResponse, CinemaDTO } from '@ultraplex-app/api';

export enum ECinemasActions {
  LoadCinemas = '[Cinemas] Load cinemas',
  CinemasLoaded = '[Cinemas] Loaded cinemas',
}

export class LoadCinemas implements Action {
  readonly type = ECinemasActions.LoadCinemas;

  constructor(public payload: BaseRequest) {}
}

export class CinemasLoaded implements Action {
  readonly type = ECinemasActions.CinemasLoaded;

  constructor(public payload: BaseResponse<CinemaDTO>) {}
}

export type CinemasActions =
  | LoadCinemas
  | CinemasLoaded;
