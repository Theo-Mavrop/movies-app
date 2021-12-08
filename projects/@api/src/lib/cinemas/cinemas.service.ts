import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiHelpersService } from '../core/services/api-helpers.service';
import { ApiHttpService } from '../core/services/api-http.service';
import { BaseResponse } from '../core/@models/base-response.model';
import { CinemaDTO } from './@models/cinema.model';
import { BaseCreateRequest, BaseRequest } from '../core/@models/base-request.model';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { CreateScreeningRequest, CreateScreenRequest, ScreenDTO, ScreeningDTO, ScreeningRequest, ScreenRequest } from '@ultraplex-app/api';

@Injectable()
export class CinemasApiService {

  constructor(
    private apiHttp: ApiHttpService,
    private apiHelpers: ApiHelpersService
  ) {}

  getCinemas(payload: BaseRequest): Observable<BaseResponse<CinemaDTO>> {
    const url = this.apiHelpers.createUrl('cinemas');
    const params = new HttpParams().set('page', payload.page).append('size', payload.size);

    return this.apiHttp.get<BaseResponse<CinemaDTO>>(url, {params});
  }

  createCinema(payload: BaseCreateRequest) {
    const url = this.apiHelpers.createUrl('cinemas');
    const httpHeaders = new HttpHeaders();
		httpHeaders.set('Content-Type', 'application/json');

    return this.apiHttp.put(url, payload, {headers: httpHeaders});
  }

  getCinemaScreens(payload: ScreenRequest): Observable<BaseResponse<ScreenDTO>> {
    const url = this.apiHelpers.createUrl(`cinemas/${payload.cinemaId}/screens`);
    const params = new HttpParams().set('page', payload.page).append('size', payload.size);
    return this.apiHttp.get<BaseResponse<ScreenDTO>>(url, {params});
  }

  createCinemaScreen(payload: CreateScreenRequest) {
    const url = this.apiHelpers.createUrl(`cinemas/${payload.cinemaId}/screens`);
    const httpHeaders = new HttpHeaders();
		httpHeaders.set('Content-Type', 'application/json');
    return this.apiHttp.put<any>(url, { name: payload.name }, {headers: httpHeaders});
  }

  getScreenings(payload: ScreeningRequest): Observable<BaseResponse<ScreeningDTO>> {
    const url = this.apiHelpers.createUrl(`cinemas/${payload.cinemaId}/screenings`);
    const params = new HttpParams().set('page', payload.page).append('size', payload.size);
    return this.apiHttp.get<BaseResponse<ScreeningDTO>>(url, {params});
  }

  createScreening(payload: CreateScreeningRequest) {
    const url = this.apiHelpers.createUrl(`cinemas/${payload.cinemaId}/screens/${payload.screenId}/screenings`);
    const httpHeaders = new HttpHeaders();
		httpHeaders.set('Content-Type', 'application/json');
    return this.apiHttp.put<any>(url, { movieId: payload.movieId, startTime: payload.startTime }, {headers: httpHeaders});
  }
}
