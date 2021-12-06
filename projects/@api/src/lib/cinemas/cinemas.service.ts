import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiHelpersService } from '../core/services/api-helpers.service';
import { ApiHttpService } from '../core/services/api-http.service';
import { BaseResponse } from '../core/@models/base-response.model';
import { CinemaDTO } from './@models/cinema.model';
import { BaseRequest } from '../core/@models/base-request.model';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class CinemasApiService {

  constructor(
    private apiHttp: ApiHttpService,
    private apiHelpers: ApiHelpersService
  ) {}

  getCinemas(payload: BaseRequest): Observable<BaseResponse<CinemaDTO>> {
    const url = this.apiHelpers.createUrl('cinemas');
    const params = new HttpParams().set('page', payload.page).append('size', payload.size)

    return this.apiHttp.get<BaseResponse<CinemaDTO>>(url, {params});
  }
}
