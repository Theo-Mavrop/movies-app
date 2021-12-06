import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../@shared/material/material.module';
import { CardComponent } from './card/card.component';
import { SharedDashboardModule } from '../@shared/dashboard/shared-dashboard.module';
import { DashboardCoreModule } from '@ultraplex-app/core';
import { DashboardFacadeService } from './dashboard.facade.service';

@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardCoreModule,
    MaterialModule,
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
