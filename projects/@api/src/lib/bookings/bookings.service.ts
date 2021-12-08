import { Injectable } from '@angular/core';
import { ApiHelpersService } from '../core/services/api-helpers.service';
import { ApiHttpService } from '../core/services/api-http.service';
import { HttpHeaders } from '@angular/common/http';
import { CreateBookingRequest } from './@models/bookings.model';

@Injectable()
export class BookingsApiService {

  constructor(
    private apiHttp: ApiHttpService,
    private apiHelpers: ApiHelpersService
  ) {}

  createBooking(payload: CreateBookingRequest) {
    const url = this.apiHelpers.createUrl('bookings');
    const httpHeaders = new HttpHeaders();
		httpHeaders.set('Content-Type', 'application/json');

    return this.apiHttp.put(url, payload, {headers: httpHeaders});
  }
}
