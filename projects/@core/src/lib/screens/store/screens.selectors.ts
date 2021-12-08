import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectTotalElements } from '../../app-store/page.selectors';
import { EScreensActions } from './screens.actions';
import { IScreensState, screensFeatureKey } from './screens.state';

export const selectScreensState = createFeatureSelector<IScreensState>(
  screensFeatureKey
);

export const selectScreens = createSelector(
  selectScreensState,
  (_state: IScreensState) => _state.screens
);

export const selectScreensTotal = createSelector(
  selectScreensState,
  selectTotalElements
);

export const isScreenCreated = createSelector(
  selectScreensState,
  (state: IScreensState) =>
      state.action === EScreensActions.CreateScreen && state.done && !state.error);

export const getScreenCreateError = createSelector(
  selectScreensState,
  (state: IScreensState) => {
    return state.action === EScreensActions.CreateScreen
    ? state.error : null;
});

export const getScreensError = createSelector(
  selectScreensState,
  (state: IScreensState) => {
    return state.action === EScreensActions.LoadScreens
      ? state.error
      : null;
});

export const selectAllMovies = createSelector(
  selectScreensState,
  (_state: IScreensState) => _state.moviesList
);

export const getAllMoviesError = createSelector(
  selectScreensState,
  (state: IScreensState) => {
    return state.action === EScreensActions.GetAllMoviesList
      ? state.error
      : null;
});
