import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiHelpersService } from '../core/services/api-helpers.service';
import { ApiHttpService } from '../core/services/api-http.service';
import { BaseResponse } from '../core/@models/base-response.model';
import { BaseRequest } from '../core/@models/base-request.model';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { MovieDTO, CreateMovieRequest } from './@models/movie.model';

@Injectable()
export class MoviesApiService {

  constructor(
    private apiHttp: ApiHttpService,
    private apiHelpers: ApiHelpersService
  ) {}

  getMovies(payload: BaseRequest): Observable<BaseResponse<MovieDTO>> {
    const url = this.apiHelpers.createUrl('movies');
    const params = new HttpParams().set('page', payload.page).append('size', payload.size)

    return this.apiHttp.get<BaseResponse<MovieDTO>>(url, {params});
  }

  createMovie(payload: CreateMovieRequest): Observable<any> {
    const url = this.apiHelpers.createUrl('movies');
    const httpHeaders = new HttpHeaders();
		httpHeaders.set('Content-Type', 'application/json');

    return this.apiHttp.put<any>(url, payload, {headers: httpHeaders});
  }
}
