import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { BaseRequest } from '@ultraplex-app/api';
import { DataTableColumn } from '../../@models/data-table';

@Component({
  selector: 'cm-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent implements OnInit {

  @Input() displayColumns: string[] = [];
  @Input() data: any[] = [];
  @Input() columns: DataTableColumn[] = [];
  @Input() total: number = 0;
  @Input() pageSize: number = 0;
  @Input() pageIndex: number = 0;

  @Output() pageChanged: EventEmitter<BaseRequest> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onPageChanged(event: PageEvent) {
    this.pageChanged.emit({
      size: event.pageSize,
      page: event.pageIndex
    });
  }
}
