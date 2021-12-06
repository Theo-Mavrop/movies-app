import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { CardComponent } from './card/card.component';
import { MaterialModule } from '../material/material.module';

const COMPONENTS: any = [
  DoughnutChartComponent,
  CardComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    ChartsModule,
    MaterialModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedDashboardModule { }
