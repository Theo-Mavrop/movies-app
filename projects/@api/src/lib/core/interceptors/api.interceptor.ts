import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
  ) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // TODO: Add to url the itinersaries/itineraryUuid for every request ????
    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8'
      },
    });

    return next.handle(req);
  }
}
