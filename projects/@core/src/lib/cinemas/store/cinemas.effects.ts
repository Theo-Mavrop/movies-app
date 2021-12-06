import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BaseResponse, CinemaDTO, CinemasApiService } from '@ultraplex-app/api';
import { map, switchMap } from 'rxjs/operators';
import { CinemasLoaded, ECinemasActions, LoadCinemas } from './cinemas.actions';

@Injectable()
export class CinemasEffects {
  loadCinemas = createEffect(
    () => this.actions$.pipe(
      ofType<LoadCinemas>(ECinemasActions.LoadCinemas),
      switchMap((action) => this.api.getCinemas(action.payload)),
      map((result: BaseResponse<CinemaDTO>) => {
        return new CinemasLoaded(result);
      })
    )
  );

  constructor(
    private actions$: Actions,
    private api: CinemasApiService
  ) {}
}
