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

export const isMovieUpdated = createSelector(
  selectMoviesState,
  (state: IMoviesState) =>
      state.action === EMoviesActions.EditMovie && state.done && !state.error);

export const getEditMovieError = createSelector(
  selectMoviesState,
  (state: IMoviesState) => {
    return state.action === EMoviesActions.EditMovie
    ? state.error : null;
});

export const isMovieDeleted = createSelector(
  selectMoviesState,
  (state: IMoviesState) =>
      state.action === EMoviesActions.DeleteMovie && state.done && !state.error);

export const getDeleteMovieError = createSelector(
  selectMoviesState,
  (state: IMoviesState) => {
    return state.action === EMoviesActions.DeleteMovie
    ? state.error : null;
});

export const getMoviesError = createSelector(
  selectMoviesState,
  (state: IMoviesState) => {
    return state.action === EMoviesActions.LoadMovies
      ? state.error
      : null;
});

export const getMovieError = createSelector(
  selectMoviesState,
  (state: IMoviesState) => {
    return state.action === EMoviesActions.GetMovie
      ? state.error
      : null;
});

export const getMovie = createSelector(
  selectMoviesState,
  (_state: IMoviesState) => _state.selectedMovie
  );

  export const getMovieSucceed = createSelector(
    selectMoviesState,
    (state: IMoviesState) =>
        state.action === EMoviesActions.GetMovie && state.done && !state.error);
