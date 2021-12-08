import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectTotalElements } from '../../app-store/page.selectors';
import { EScreeningsActions } from './screenings.actions';
import { IScreeningsState, screeningsFeatureKey } from './screenings.state';

export const selectScreeningsState = createFeatureSelector<IScreeningsState>(
  screeningsFeatureKey
);

export const selectScreenings = createSelector(
  selectScreeningsState,
  (_state: IScreeningsState) => _state.screenings
);

export const selectScreeningsTotal = createSelector(
  selectScreeningsState,
  selectTotalElements
);

export const isScreeningCreated = createSelector(
  selectScreeningsState,
  (state: IScreeningsState) =>
      state.action === EScreeningsActions.CreateScreening && state.done && !state.error);

export const getScreeningCreateError = createSelector(
  selectScreeningsState,
  (state: IScreeningsState) => {
    return state.action === EScreeningsActions.CreateScreening
    ? state.error : null;
});

export const getScreeningsError = createSelector(
  selectScreeningsState,
  (state: IScreeningsState) => {
    return state.action === EScreeningsActions.LoadScreenings
      ? state.error
      : null;
});

