import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BaseResponse, CinemasApiService, ScreeningDTO } from '@ultraplex-app/api';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CreateScreening, CreateScreeningFail, CreateScreeningSuccess, EScreeningsActions, LoadScreenings, ScreeningsLoaded, ScreeningsLoadedFailed } from './screenings.actions';

@Injectable()
export class ScreeningsEffects {
  loadScreenings = createEffect(
    () => this.actions$.pipe(
      ofType<LoadScreenings>(EScreeningsActions.LoadScreenings),
      switchMap((action) => this.api.getScreenings(action.payload)),
      map((result: BaseResponse<ScreeningDTO>) => {
        return new ScreeningsLoaded(result);
      }),
      catchError((err) => [new ScreeningsLoadedFailed(err)])
    )
  );

  createScreening = createEffect(
    () => this.actions$.pipe(
      ofType<CreateScreening>(EScreeningsActions.CreateScreening),
      switchMap((action) => this.api.createScreening(action.payload)),
      map((result) => {
        return new CreateScreeningSuccess();
      }),
      catchError((err) => [new CreateScreeningFail(err)])
    )
  );

  constructor(
    private actions$: Actions,
    private api: CinemasApiService,
  ) {}
}
