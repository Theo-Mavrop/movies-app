import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BaseResponse, ScreenDTO, CinemasApiService, MoviesApiService, MovieDTO } from '@ultraplex-app/api';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CreateScreen, CreateScreenFail, CreateScreenSuccess, EScreensActions, GetAllMoviesList, GetAllMoviesListFailed, GetAllMoviesListSuccess, LoadScreens, ScreensLoaded, ScreensLoadedFailed } from './screens.actions';

@Injectable()
export class ScreensEffects {
  loadScreens = createEffect(
    () => this.actions$.pipe(
      ofType<LoadScreens>(EScreensActions.LoadScreens),
      switchMap((action) => this.api.getCinemaScreens(action.payload)),
      map((result: BaseResponse<ScreenDTO>) => {
        return new ScreensLoaded(result);
      }),
      catchError((err) => [new ScreensLoadedFailed(err)])
    )
  );

  createScreen = createEffect(
    () => this.actions$.pipe(
      ofType<CreateScreen>(EScreensActions.CreateScreen),
      switchMap((action) => this.api.createCinemaScreen(action.payload)),
      map((result) => {
        return new CreateScreenSuccess();
      }),
      catchError((err) => [new CreateScreenFail(err)])
    )
  );

  getAllMoviesList = createEffect(
    () => this.actions$.pipe(
      ofType<GetAllMoviesList>(EScreensActions.GetAllMoviesList),
      switchMap(() => this.moviesApi.getAllMovies()),
      map((result: BaseResponse<MovieDTO>) => {
        return new GetAllMoviesListSuccess(result);
      }),
      catchError((err) => [new GetAllMoviesListFailed(err)])
    )
  );

  constructor(
    private actions$: Actions,
    private api: CinemasApiService,
    private moviesApi: MoviesApiService
  ) {}
}
