import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedDashboardModule } from '../@shared/dashboard/shared-dashboard.module';
import { DashboardCoreModule } from '@movies-app/core';
import { DashboardFacadeService } from './dashboard.facade.service';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardCoreModule,
    SharedDashboardModule
  ],
  providers: [
    DashboardFacadeService
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {}
