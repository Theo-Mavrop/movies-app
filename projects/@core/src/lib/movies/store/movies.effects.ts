import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BaseResponse, MovieDTO, MoviesApiService } from '@ultraplex-app/api';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CreateMovie, CreateMovieFail, CreateMovieSuccess, EMoviesActions, LoadMovies, MoviesLoaded, MoviesLoadedFailed } from './movies.actions';

@Injectable()
export class MoviesEffects {
  loadMovies = createEffect(
    () => this.actions$.pipe(
      ofType<LoadMovies>(EMoviesActions.LoadMovies),
      switchMap((action) => this.api.getMovies(action.payload)),
      map((result: BaseResponse<MovieDTO>) => {
        return new MoviesLoaded(result);
      }),
      catchError((err) => [new MoviesLoadedFailed(err)])
    )
  );

  createMovie = createEffect(
    () => this.actions$.pipe(
      ofType<CreateMovie>(EMoviesActions.CreateMovie),
      switchMap((action) => this.api.createMovie(action.payload)),
      map((result) => {
        return new CreateMovieSuccess();
      }),
      catchError((err) => [new CreateMovieFail(err)])
    )
  );

  constructor(
    private actions$: Actions,
    private api: MoviesApiService
  ) {}
}
