import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectTotalElements } from '../../app-store/page.selectors';
import { ICinemasState, cinemasFeatureKey } from './cinemas.state';

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

