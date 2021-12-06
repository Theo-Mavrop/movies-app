import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { cinemasFeatureKey } from './store/cinemas.state';
import { cinemasReducers } from './store/cinemas.reducers';
import { CinemasEffects } from './store/cinemas.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(cinemasFeatureKey, cinemasReducers),
    EffectsModule.forFeature([CinemasEffects])
  ]
})
export class CinemasCoreModule {}
