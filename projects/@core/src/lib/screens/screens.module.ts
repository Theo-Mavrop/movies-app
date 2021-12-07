import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { screensFeatureKey } from './store/screens.state';
import { ScreensEffects } from './store/screens.effects';
import { screensReducers } from './store/screens.reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(screensFeatureKey, screensReducers),
    EffectsModule.forFeature([ScreensEffects])
  ]
})
export class ScreensCoreModule {}
