import { Action } from '@ngrx/store';

export enum EDashboardActions {
  LoadTotalCinemas = '[Dashboaard] Load total cinemas',
  TotalCinemasLoaded = '[Dashboaard] Loaded total cinemas',

  LoadTotalMovies = '[Dashboaard] Load total movies',
  TotalMoviesLoaded = '[Dashboaard] Loaded total movies',

  LoadTotalScreens = '[Dashboaard] Load total screens',
  TotalScreensLoaded = '[Dashboaard] Loaded total screens',

  LoadTotalBookings = '[Dashboaard] Load total bookings',
  TotalBookingsLoaded = '[Dashboaard] Loaded total bookings'
}

export class LoadTotalCinemas implements Action {
  readonly type = EDashboardActions.LoadTotalCinemas;
}

export class TotalCinemasLoaded implements Action {
  readonly type = EDashboardActions.TotalCinemasLoaded;

  constructor(public payload: number) {}
}

export class LoadTotalMovies implements Action {
  readonly type = EDashboardActions.LoadTotalMovies;
}

export class TotalMoviesLoaded implements Action {
  readonly type = EDashboardActions.TotalMoviesLoaded;

  constructor(public payload: number) {}
}

export class LoadTotalScreens implements Action {
  readonly type = EDashboardActions.LoadTotalScreens;
}

export class TotalScreensLoaded implements Action {
  readonly type = EDashboardActions.TotalScreensLoaded;

  constructor(public payload: number) {}
}

export class LoadTotalBookings implements Action {
  readonly type = EDashboardActions.LoadTotalBookings;
}

export class TotalBookingsLoaded implements Action {
  readonly type = EDashboardActions.TotalBookingsLoaded;

  constructor(public payload: number) {}
}

export type DashboardActions =
  | LoadTotalCinemas
  | TotalCinemasLoaded
  | LoadTotalMovies
  | TotalMoviesLoaded
  | LoadTotalScreens
  | TotalScreensLoaded
  | LoadTotalBookings
  | TotalBookingsLoaded;
