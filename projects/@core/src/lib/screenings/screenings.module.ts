import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { screeningsFeatureKey } from './store/screenings.state';
import { ScreeningsEffects } from './store/screenings.effects';
import { screeningsReducers } from './store/screenings.reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(screeningsFeatureKey, screeningsReducers),
    EffectsModule.forFeature([ScreeningsEffects])
  ]
})
export class ScreeninsCoreModule {}
