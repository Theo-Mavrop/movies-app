import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Color, Label, MultiDataSet, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'dashboard-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoughnutChartComponent implements OnInit {

  @Input() data: SingleDataSet | MultiDataSet = [];
  @Input() colors: Color[] = [ {backgroundColor: '#303f9f'}];
  @Input() labels: Label[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
