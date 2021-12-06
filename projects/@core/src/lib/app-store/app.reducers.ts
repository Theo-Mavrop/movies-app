import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<AppState, any>
>('Root reducers token', {
  factory: () => ({
  }),
});

