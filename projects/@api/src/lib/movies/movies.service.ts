import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiHelpersService } from '../core/services/api-helpers.service';
import { ApiHttpService } from '../core/services/api-http.service';
import { BaseRequest, SearchRequest } from '../core/@models/base-request.model';
import { HttpParams } from '@angular/common/http';
import { MovieDTO, CRUDMovieRequest } from './@models/movie.model';

@Injectable()
export class MoviesApiService {

  constructor(
    private apiHttp: ApiHttpService,
    private apiHelpers: ApiHelpersService
  ) {}

  getMovies(payload: BaseRequest): Observable<MovieDTO[]> {
    const url = this.apiHelpers.createUrl('movies');
    const params = new HttpParams().set('_page', payload.page + 1).append('_limit', payload.size);

    return this.apiHttp.get<MovieDTO[]>(url, {params});
  }

  searchMovies(payload: SearchRequest): Observable<MovieDTO[]> {
    const url = this.apiHelpers.createUrl('movies');
    const params = new HttpParams().set('q', payload.text);

    return this.apiHttp.get<MovieDTO[]>(url, {params});
  }

  getMovie(payload: BaseRequest): Observable<MovieDTO> {
    const url = this.apiHelpers.createUrl(`movies/${payload.id}`);

    return this.apiHttp.get<MovieDTO>(url);
  }

  createMovie(payload: CRUDMovieRequest): Observable<any> {
    const url = this.apiHelpers.createUrl('movies');

    return this.apiHttp.post<any>(url, payload);
  }

  editMovie(payload: CRUDMovieRequest): Observable<any> {
    const url = this.apiHelpers.createUrl(`movies/${payload.id}`);

    return this.apiHttp.patch<any>(url, payload);
  }

  deleteMovie(payload: CRUDMovieRequest): Observable<any> {
    const url = this.apiHelpers.createUrl(`movies/${payload.id}`);

    return this.apiHttp.delete<any>(url);
  }
}
