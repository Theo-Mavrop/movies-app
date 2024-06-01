import { Action } from "@ngrx/store";
import { CreateBookingRequest } from "@movies-app/api";

export enum EBookingsActions {
  CreateBooking = '[Bookings] Create booking',
  CreateBookingSuccess = '[Bookings] Create booking success',
  CreateBookingFail = '[Bookings] Create booking failed'
}

export class CreateBooking implements Action {
  readonly type = EBookingsActions.CreateBooking;

  constructor(public payload: CreateBookingRequest) {}
}

export class CreateBookingSuccess implements Action {
  readonly type = EBookingsActions.CreateBookingSuccess;
}

export class CreateBookingFail implements Action {
  readonly type = EBookingsActions.CreateBookingFail;

  constructor(public payload: Error) {}
}

export type BookingsActions =
  | CreateBooking
  | CreateBookingSuccess
  | CreateBookingFail;
