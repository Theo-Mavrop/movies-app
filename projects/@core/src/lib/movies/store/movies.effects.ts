import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BaseResponse, MovieDTO, MoviesApiService } from '@movies-app/api';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CreateMovie, CreateMovieFail, CreateMovieSuccess, EMoviesActions, LoadMovies, MoviesLoaded, MoviesLoadedFailed, SearchMovies, SearchMoviesLoaded, SearchMoviesFailed, EditMovie, EditMovieSuccess, EditMovieFail, DeleteMovie, DeleteMovieSuccess, DeleteMovieFail, GetMovie, MovieLoaded } from './movies.actions';

@Injectable()
export class MoviesEffects {
  loadMovies = createEffect(
    () => this.actions$.pipe(
      ofType<LoadMovies>(EMoviesActions.LoadMovies),
      switchMap((action) => this.api.getMovies(action.payload)),
      map((result: any) => {
        const links = result.headers.get('Link').split(',');
        const last = links.find(l => l.includes('last'));
        const reg = /(?<=_page=)(.*?)(?=&_limit)/;
        return new MoviesLoaded(
          {
            data: result.body,
            items: result.headers.get('X-Total-Count'),
            pages: last ? Number(last.match(reg)[0]) : null,
          }
        );
      }),
      catchError((err) => [new MoviesLoadedFailed(err)])
    )
  );

  getMovie = createEffect(
    () => this.actions$.pipe(
      ofType<GetMovie>(EMoviesActions.GetMovie),
      switchMap((action) => this.api.getMovie(action.payload)),
      map((result: any) => {
        return new MovieLoaded(result.body);
      }),
      catchError((err) => [new MoviesLoadedFailed(err)])
    )
  );

  searchMpvies = createEffect(
    () => this.actions$.pipe(
      ofType<SearchMovies>(EMoviesActions.SearchMovies),
      switchMap((action) => this.api.searchMovies(action.payload)),
      map((result: any) => {
        return new SearchMoviesLoaded(result.body);
      }),
      catchError((err) => [new SearchMoviesFailed(err)])
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

  editMovie = createEffect(
    () => this.actions$.pipe(
      ofType<EditMovie>(EMoviesActions.EditMovie),
      switchMap((action) => this.api.editMovie(action.payload)),
      map((result) => {
        return new EditMovieSuccess();
      }),
      catchError((err) => [new EditMovieFail(err)])
    )
  );

  deleteMovie = createEffect(
    () => this.actions$.pipe(
      ofType<DeleteMovie>(EMoviesActions.DeleteMovie),
      switchMap((action) => this.api.deleteMovie(action.payload)),
      map((result) => {
        return new DeleteMovieSuccess();
      }),
      catchError((err) => [new DeleteMovieFail(err)])
    )
  );

  constructor(
    private actions$: Actions,
    private api: MoviesApiService
  ) {}
}
