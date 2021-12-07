import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { GlobalErrorHandler } from './core/interceptors/global-error-handler';
import { ApiHelpersService } from './core/services/api-helpers.service';
import { ApiHttpService } from './core/services/api-http.service';
import { DashboardApiModule } from './dashboard/dashboard-api.module';
import { CinemasApiModule } from './cinemas/cinemas-api.module';
import { MoviesApiModule } from './movies/movies-api.module';

@NgModule({
  providers: [
    ApiHttpService
  ],
  imports: [
    HttpClientModule,
    DashboardApiModule,
    CinemasApiModule,
    MoviesApiModule
  ]
})
export class ApiModule {
  static forRoot(config: ApiConfig): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers : [
        { provide: API_CONFIG, useValue: config },
        { provide: ApiHelpersService },
        { provide: ErrorHandler, useClass: GlobalErrorHandler }
      ]
    };
  }
}

declare module '@angular/core' {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    providers?: Provider[];
  }
}

export const API_CONFIG = new InjectionToken<ApiConfig>('config');

export interface ApiConfig {
  baseUrl: string
}
