import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BaseResponse, CinemaDTO, CinemasApiService } from '@ultraplex-app/api';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CinemasLoaded, CreateCinema, ECinemasActions, LoadCinemas, CreateCinemaSuccess, CreateCinemaFail, CinemasLoadedFailed } from './cinemas.actions';

@Injectable()
export class CinemasEffects {
  loadCinemas = createEffect(
    () => this.actions$.pipe(
      ofType<LoadCinemas>(ECinemasActions.LoadCinemas),
      switchMap((action) => this.api.getCinemas(action.payload)),
      map((result: BaseResponse<CinemaDTO>) => {
        return new CinemasLoaded(result);
      }),
      catchError((err) => [new CinemasLoadedFailed(err)])
    )
  );

  createCinema = createEffect(
    () => this.actions$.pipe(
      ofType<CreateCinema>(ECinemasActions.CreateCinema),
      switchMap((action) => this.api.createCinema(action.payload)),
      map((result) => {
        return new CreateCinemaSuccess();
      }),
      catchError((err) => [new CreateCinemaFail(err)])
    )
  );

  constructor(
    private actions$: Actions,
    private api: CinemasApiService
  ) {}
}
