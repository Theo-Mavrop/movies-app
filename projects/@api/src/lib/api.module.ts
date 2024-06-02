import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, InjectionToken, NgModule } from '@angular/core';
import { ApiInterceptor } from './core/interceptors/api.interceptor';
import { GlobalErrorHandler } from './core/interceptors/global-error-handler';
import { ApiHelpersService } from './core/services/api-helpers.service';
import { ApiHttpService } from './core/services/api-http.service';
import { MoviesApiModule } from './movies/movies-api.module';

@NgModule({
  providers: [
    ApiHttpService
  ],
  imports: [
    HttpClientModule,
    MoviesApiModule,
  ]
})
export class ApiModule {
  static forRoot(config: ApiConfig) {
    return {
      ngModule: ApiModule,
      providers : [
        { provide: API_CONFIG, useValue: config },
        { provide: ApiHelpersService },
        { provide: ErrorHandler, useClass: GlobalErrorHandler },
        { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true}
      ]
    };
  }
}

export const API_CONFIG = new InjectionToken<ApiConfig>('config');

export interface ApiConfig {
  baseUrl: string
}
