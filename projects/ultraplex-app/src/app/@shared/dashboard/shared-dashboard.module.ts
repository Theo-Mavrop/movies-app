import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';

const COMPONENTS: any = [
  DoughnutChartComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedDashboardModule { }
