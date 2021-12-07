import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectTotalElements } from '../../app-store/page.selectors';
import { EMoviesActions } from './movies.actions';
import { IMoviesState, moviesFeatureKey } from './movies.state';

export const selectMoviesState = createFeatureSelector<IMoviesState>(
  moviesFeatureKey
);

export const selectMovies = createSelector(
  selectMoviesState,
  (_state: IMoviesState) => _state.movies
);

export const selectMoviesTotal = createSelector(
  selectMoviesState,
  selectTotalElements
);

export const isMovieCreated = createSelector(
  selectMoviesState,
  (state: IMoviesState) =>
      state.action === EMoviesActions.CreateMovie && state.done && !state.error);

export const getCreateMovieError = createSelector(
  selectMoviesState,
  (state: IMoviesState) => {
    return state.action === EMoviesActions.CreateMovie
    ? state.error : null;
});

export const getMoviesError = createSelector(
  selectMoviesState,
  (state: IMoviesState) => {
    return state.action === EMoviesActions.LoadMovies
      ? state.error
      : null;
});
