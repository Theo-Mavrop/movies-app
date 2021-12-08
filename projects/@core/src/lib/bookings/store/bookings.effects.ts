import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BookingsApiService } from '@ultraplex-app/api';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CreateBooking, CreateBookingFail, CreateBookingSuccess, EBookingsActions } from './bookings.actions';

@Injectable()
export class BookingsEffects {

  createBooking = createEffect(
    () => this.actions$.pipe(
      ofType<CreateBooking>(EBookingsActions.CreateBooking),
      switchMap((action) => this.api.createBooking(action.payload)),
      map((result) => {
        return new CreateBookingSuccess();
      }),
      catchError((err) => [new CreateBookingFail(err)])
    )
  );

  constructor(
    private actions$: Actions,
    private api: BookingsApiService
  ) {}
}
