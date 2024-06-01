import { Action } from '@ngrx/store';
import { BaseResponse, CreateScreeningRequest, ScreeningDTO, ScreeningRequest } from '@movies-app/api';

export enum EScreeningsActions {
  LoadScreenings = '[Screenings] Load Screenings',
  ScreeningsLoaded = '[Screenings] Loaded Screenings',
  ScreeningsLoadedFailed = '[Screenings] Load Screenings failed',
  CreateScreening = '[Screenings] Create Screening',
  CreateScreeningSuccess = '[Screenings] Create Screening success',
  CreateScreeningFail = '[Screenings] Create Screening failed',
}

export class LoadScreenings implements Action {
  readonly type = EScreeningsActions.LoadScreenings;

  constructor(public payload: ScreeningRequest) {}
}

export class ScreeningsLoaded implements Action {
  readonly type = EScreeningsActions.ScreeningsLoaded;

  constructor(public payload: BaseResponse<ScreeningDTO>) {}
}

export class ScreeningsLoadedFailed implements Action {
  readonly type = EScreeningsActions.ScreeningsLoadedFailed;

  constructor(public payload: Error) {
  }
}

export class CreateScreening implements Action {
  readonly type = EScreeningsActions.CreateScreening;

  constructor(public payload: CreateScreeningRequest) {}
}

export class CreateScreeningSuccess implements Action {
  readonly type = EScreeningsActions.CreateScreeningSuccess;
}

export class CreateScreeningFail implements Action {
  readonly type = EScreeningsActions.CreateScreeningFail;

  constructor(public payload: Error) {}
}

export type ScreeningsActions =
  | LoadScreenings
  | ScreeningsLoadedFailed
  | ScreeningsLoaded
  | CreateScreening
  | CreateScreeningSuccess
  | CreateScreeningFail;
