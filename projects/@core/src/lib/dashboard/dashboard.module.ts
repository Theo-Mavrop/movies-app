import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { dashboardFeatureKey } from './store/dashboard.state';
import { dashboardReducers } from './store/dashboard.reducers';
import { DashboardEffects } from './store/dashboard.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(dashboardFeatureKey, dashboardReducers),
    EffectsModule.forFeature([DashboardEffects])
  ]
})
export class DashboardCoreModule {}
