import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'dashboard-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoughnutChartComponent implements OnInit {

  @Input() data;
  @Input() labels = [];
  @Input() colors = [ {backgroundColor: '#303f9f'}];

  constructor() { }

  ngOnInit(): void {
  }

}
