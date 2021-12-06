import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardApiService } from './dashboard.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [],
  providers: [
    DashboardApiService
  ]
})
export class DashboardApiModule {}
