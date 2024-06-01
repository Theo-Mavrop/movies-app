import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { BaseRequest } from '@movies-app/api';
import { DataTableColumn } from '../../@models/data-table';

@Component({
  selector: 'cm-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DataTableComponent implements OnInit {

  @Input() displayColumns: string[] = [];
  @Input() data: any[] = [];
  @Input() columns: DataTableColumn[] = [];
  @Input() total: number = 0;
  @Input() pageSize: number = 0;
  @Input() pageIndex: number = 0;
  actionsColumn: DataTableColumn;

  expandedElement: null;

  @Output() pageChanged: EventEmitter<BaseRequest> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    const actionsColumnIndex = this.columns.findIndex(c => c.columnDef == 'actions');
    if (actionsColumnIndex !== -1) {
      this.actionsColumn = this.columns.splice(actionsColumnIndex,1)[0];
    }
  }

  onPageChanged(event: PageEvent) {
    this.pageChanged.emit({
      size: event.pageSize,
      page: event.pageIndex
    });
  }
}
