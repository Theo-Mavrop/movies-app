import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { CardComponent } from './card/card.component';
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
    BaseChartDirective,
    MatCardModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedDashboardModule { }
