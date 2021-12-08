import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EBookingsActions } from './bookings.actions';
import { IBookingsState, bookingsFeatureKey } from './bookings.state';

export const selectBookingsState = createFeatureSelector<IBookingsState>(
  bookingsFeatureKey
);

export const isBookingCreated = createSelector(
  selectBookingsState,
  (state: IBookingsState) =>
      state.action === EBookingsActions.CreateBooking && state.done && !state.error);

export const getCreateBookingError = createSelector(
  selectBookingsState,
  (state: IBookingsState) => {
    return state.action === EBookingsActions.CreateBooking
    ? state.error : null;
});

