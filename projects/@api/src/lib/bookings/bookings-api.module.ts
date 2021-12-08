import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsApiService } from './bookings.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [],
  providers: [
    BookingsApiService
  ]
})
export class BookingsApiModule {}
