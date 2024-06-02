import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiHttpService {

  constructor (
    private http: HttpClient
  ) { }

  get<T>(url: string, options?: {
    headers?: HttpHeaders,
    params?: HttpParams
  }): Observable<any> {
    return this.http.get<any>(url, {...options, observe: 'response'});
  }

  post<T>(url: string, data: any, options?: any) {
    return this.http.post<T>(url, data, options);
  }

  patch<T>(url: string, data: any, options?: any) {
    return this.http.patch<T>(url, data, options);
  }

  put<T>(url: string, data: any, options?: any) {
    return this.http.put<T>(url, data, options);
  }

  delete<T>(url: string, options?: any) {
    return this.http.delete<T>(url, options);
  }
}

