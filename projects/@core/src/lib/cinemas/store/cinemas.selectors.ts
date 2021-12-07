import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectTotalElements } from '../../app-store/page.selectors';
import { ICinemasState, cinemasFeatureKey } from './cinemas.state';
import { ECinemasActions } from './cinemas.actions';

export const selectCinemasState = createFeatureSelector<ICinemasState>(
  cinemasFeatureKey
);

export const selectCinemas = createSelector(
  selectCinemasState,
  (_state: ICinemasState) => _state.cinemas
);

export const selectCinemasTotal = createSelector(
  selectCinemasState,
  selectTotalElements
);

export const isCreated = createSelector(
  selectCinemasState,
  (state: ICinemasState) =>
      state.action === ECinemasActions.CreateCinema && state.done && !state.error);

export const getCreateError = createSelector(
  selectCinemasState,
  (state: ICinemasState) => {
    return state.action === ECinemasActions.CreateCinema
    ? state.error : null;
});

export const getCinemasError = createSelector(
  selectCinemasState,
  (state: ICinemasState) => {
    return state.action === ECinemasActions.LoadCinemas
      ? state.error
      : null;
});
