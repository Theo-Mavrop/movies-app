import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BaseRequest, BaseResponse, CinemaDTO } from '@ultraplex-app/api';
import { Observable } from 'rxjs';
import { DataTableColumn } from '../../@shared/common/@models/data-table';
import { CinemasFacadeService } from '../cinemas.facade.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-cinemas-list',
  templateUrl: './cinemas-list.component.html',
  styleUrls: ['./cinemas-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CinemasListComponent implements OnInit {

  cinemaColumns: DataTableColumn[] = [
    {
      columnDef: 'id',
      header: 'Id',
      cell: (element) => `${element.id}`
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element) => `${element.name || ''}`
    }
  ];
  cinemaData$: Observable<CinemaDTO[]>;
  cinemaDisplayColumns: string[];
  totalCinemas$: Observable<number>;
  pageSize: 10;
  pageIndex: 0;
  childDataField = 'screens'
  childColumns: DataTableColumn[] = [
    {
      columnDef: 'id',
      header: 'Id',
      cell: (element) => `${element.id}`
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element) => `${element.name || ''}`
    }
  ];
  displayChildColumns: string[];

  constructor(
    private cinemasFacadeService: CinemasFacadeService
  ) {
    this.cinemaData$ = this.cinemasFacadeService.cinemas$;
    this.cinemaDisplayColumns = this.cinemaColumns.map(c => c.columnDef);
    this.totalCinemas$ = this.cinemasFacadeService.totalCinemas$;
    this.displayChildColumns = this.childColumns.map(c => c.columnDef);
  }

  ngOnInit(): void {
    this.onPageChange({
      size: 10,
      page: 0
    });
  }

  onPageChange(event: BaseRequest) {
    this.cinemasFacadeService.loadCinemas({
      size: event.size,
      page: event.page
    });
  }

}
