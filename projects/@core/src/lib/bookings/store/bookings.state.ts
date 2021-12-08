import { IBaseResultState } from "../../app-store/app.state";

export interface IBookingsState extends IBaseResultState{
}

export const initialBookingsState: IBookingsState = {
  action: null,
  done: false,
  error: null
};

export const bookingsFeatureKey = 'bookings';
