import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { CardComponent } from './card/card.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';


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
    MatCardModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedDashboardModule { }
