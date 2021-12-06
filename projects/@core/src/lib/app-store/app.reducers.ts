import { InjectionToken } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { ApplicationConfig } from '../application.module';
import { AppState } from './app.state';

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<AppState, any>
>('Root reducers token', {
  factory: () => ({
  }),
});

