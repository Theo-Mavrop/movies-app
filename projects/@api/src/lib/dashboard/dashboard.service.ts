import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiHelpersService } from '../core/services/api-helpers.service';
import { ApiHttpService } from '../core/services/api-http.service';
import { map } from 'rxjs/operators';
import { HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DashboardApiService {

  constructor(
    private apiHttp: ApiHttpService,
    private apiHelpers: ApiHelpersService
  ) {}

  getTotalCinemas(): Observable<any> {
    const url = this.apiHelpers.createUrl('cinemas');
    const params = new HttpParams().set('size',
    '1000');

    return this.apiHttp.get<any>(url, {params}).pipe(
      map((res: any) => {
        const totalScreens = res.content.map((item) => {
          return item.screens.length;
        }).reduce((acc, val) => acc + val, 0);
        return { totalCinemas: res.totalElements as number, totalScreens: totalScreens };
      })
    );
  }

  getTotalMovies(): Observable<number> {
    const url = this.apiHelpers.createUrl('movies');
    return this.apiHttp.get<any>(url).pipe(
      map((res: any) => {
        return res.totalElements as number;
      })
    );
  }

  getTotalBookings(): Observable<number> {
    const url = this.apiHelpers.createUrl('bookings');
    return this.apiHttp.get<any>(url).pipe(
      map((res: any) => {
        return res.totalElements as number;
      })
    );
  }
}
