import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardApiService } from '@movies-app/api';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { EDashboardActions, LoadTotalBookings, LoadTotalCinemas, LoadTotalMovies, TotalBookingsLoaded, TotalCinemasLoaded, TotalMoviesLoaded, TotalScreensLoaded } from './dashboard.actions';

@Injectable()
export class DashboardEffects {
  loadTotalCinemas = createEffect(
    () => this.actions$.pipe(
      ofType<LoadTotalCinemas>(EDashboardActions.LoadTotalCinemas),
      switchMap(() => this.api.getTotalCinemas()),
      mergeMap((result) => {
        return [
          new TotalCinemasLoaded(result.totalCinemas),
          new TotalScreensLoaded(result.totalScreens)
        ];
      })
    )
  );
  loadTotalMovies = createEffect(
    () => this.actions$.pipe(
      ofType<LoadTotalMovies>(EDashboardActions.LoadTotalMovies),
      switchMap(() => this.api.getTotalMovies()),
      map((result) => {
        return new TotalMoviesLoaded(result);
      })
    )
  );
  loadTotalBookings = createEffect(
    () => this.actions$.pipe(
      ofType<LoadTotalBookings>(EDashboardActions.LoadTotalBookings),
      switchMap(() => this.api.getTotalBookings()),
      map((result) => {
        return new TotalBookingsLoaded(result);
      })
    )
  );

  constructor(
    private actions$: Actions,
    private api: DashboardApiService
  ) {}
}
