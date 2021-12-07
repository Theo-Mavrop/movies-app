import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { moviesFeatureKey } from './store/movies.state';
import { moviesReducers } from './store/movies.reducers';
import { MoviesEffects } from './store/movies.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(moviesFeatureKey, moviesReducers),
    EffectsModule.forFeature([MoviesEffects])
  ]
})
export class MoviesCoreModule {}
