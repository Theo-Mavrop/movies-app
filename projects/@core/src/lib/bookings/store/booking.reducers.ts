import { BookingsActions, EBookingsActions } from "./bookings.actions";
import { IBookingsState, initialBookingsState } from "./bookings.state";

export const bookingsReducers = (
  state = initialBookingsState,
  action: BookingsActions
): IBookingsState => {
  switch (action.type) {
    case EBookingsActions.CreateBooking: {
      return {
        ...state,
        action: EBookingsActions.CreateBooking,
        done: false,
        error: null
      }
    }
    case EBookingsActions.CreateBookingSuccess: {
      return {
        ...state,
        done: true,
        error: null
      }
    }
    case EBookingsActions.CreateBookingFail: {
      return {
        ...state,
        done: true,
        error: action.payload
      }
    }
    default:
      return state;
  }
};

