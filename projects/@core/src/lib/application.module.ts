import { InjectionToken, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ApiModule } from '@movies-app/api';
import { ROOT_REDUCERS } from './app-store/app.reducers';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({connectInZone: true}),
    EffectsModule.forRoot([]),
    ApiModule
  ],
  providers: [],
  exports: []
})
export class ApplicationModule {
  static forRoot(config: ApplicationConfig) {
    return {
      ngModule: ApplicationModule,
      providers: [
        { provide: CONFIGURATION, useValue: config },
        ...ApiModule.forRoot({
          baseUrl: config.baseUrl
        }).providers
      ]
    };
  }
}

export const CONFIGURATION = new InjectionToken<boolean>('');

export interface ApplicationConfig {
  baseUrl: string;
}

