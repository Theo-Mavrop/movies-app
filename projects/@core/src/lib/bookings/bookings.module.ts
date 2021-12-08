import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { bookingsFeatureKey } from './store/bookings.state';
import { BookingsEffects } from './store/bookings.effects';
import { bookingsReducers } from './store/booking.reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(bookingsFeatureKey, bookingsReducers),
    EffectsModule.forFeature([BookingsEffects])
  ]
})
export class BookingsCoreModule {}
