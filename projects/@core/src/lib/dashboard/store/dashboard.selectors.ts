import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IDashboardState, dashboardFeatureKey } from './dashboard.state';

export const selectDashboardState = createFeatureSelector<IDashboardState>(
  dashboardFeatureKey
);

export const selectTotalCinemas = createSelector(
  selectDashboardState,
  (_state: IDashboardState) => _state.totalCinemas
);

export const selectTotalMovies = createSelector(
  selectDashboardState,
  (_state: IDashboardState) => _state.totalMovies
);

export const selectTotalScreens = createSelector(
  selectDashboardState,
  (_state: IDashboardState) => _state.totalScreens
);

export const selectTotalBookings = createSelector(
  selectDashboardState,
  (_state: IDashboardState) => _state.totalBookings
);
