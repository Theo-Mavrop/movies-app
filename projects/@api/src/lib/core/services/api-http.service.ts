import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiHttpService {

  constructor (
    private http: HttpClient
  ) { }

  get<T>(url: string, options?: any) {
    return this.http.get<T>(url, options);
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
