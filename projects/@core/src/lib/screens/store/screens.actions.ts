import { Action } from '@ngrx/store';
import { BaseResponse, CreateScreenRequest, ScreenDTO, ScreenRequest } from '@ultraplex-app/api';

export enum EScreensActions {
  LoadScreens = '[Screens] Load Screens',
  ScreensLoaded = '[Screens] Loaded Screens',
  ScreensLoadedFailed = '[Screens] Load Screens failed',
  CreateScreen = '[Screens] Create Screen',
  CreateScreenSuccess = '[Screens] Create Screen success',
  CreateScreenFail = '[Screens] Create Screen failed'
}

export class LoadScreens implements Action {
  readonly type = EScreensActions.LoadScreens;

  constructor(public payload: ScreenRequest) {}
}

export class ScreensLoaded implements Action {
  readonly type = EScreensActions.ScreensLoaded;

  constructor(public payload: BaseResponse<ScreenDTO>) {}
}

export class ScreensLoadedFailed implements Action {
  readonly type = EScreensActions.ScreensLoadedFailed;

  constructor(public payload: Error) {
  }
}

export class CreateScreen implements Action {
  readonly type = EScreensActions.CreateScreen;

  constructor(public payload: CreateScreenRequest) {}
}

export class CreateScreenSuccess implements Action {
  readonly type = EScreensActions.CreateScreenSuccess;
}

export class CreateScreenFail implements Action {
  readonly type = EScreensActions.CreateScreenFail;

  constructor(public payload: Error) {}
}

export type ScreensActions =
  | LoadScreens
  | ScreensLoadedFailed
  | ScreensLoaded
  | CreateScreen
  | CreateScreenSuccess
  | CreateScreenFail;
