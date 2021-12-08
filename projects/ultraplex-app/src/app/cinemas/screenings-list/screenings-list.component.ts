import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseRequest, ScreeningDTO } from '@ultraplex-app/api';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DataTableColumn } from '../../@shared/common/@models/data-table';
import { ScreensFacadeService } from '../screens-list/screens.facade.service';
import { ScreeningsFacadeService } from './screenings.facade.service';

@Component({
  selector: 'app-screenings-list',
  templateUrl: './screenings-list.component.html',
  styleUrls: ['./screenings-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScreeningsListComponent implements OnInit {

  screeningsColumns: DataTableColumn[] = [
    {
      columnDef: 'id',
      header: 'Id',
      cell: (element) => `${element.id}`
    },
    {
      columnDef: 'cinemaName',
      header: 'Cinema',
      cell: (element) => `${element.cinemaName || ''}`
    },
    {
      columnDef: 'screenName',
      header: 'Screen',
      cell: (element) => `${element.screenName || ''}`
    },
    {
      columnDef: 'start',
      header: 'Start',
      cell: (element) => `${element.start ? new Date(element.start).toDateString() : ''}`
    },
    {
      columnDef: 'movie',
      header: 'Movie',
      cell: (element) => `${element.movie.name || ''}`
    },
    {
      columnDef: 'actions',
      header: 'Actions',
      actions: [
        { label: 'Add Booking', action: (element: ScreeningDTO) => this.addBooking(element)}
      ]
    }
  ];
  screeningsData$: Observable<ScreeningDTO[]>;
  screeningsDisplayColumns: string[];
  totalScreenings$: Observable<number>;
  pageSize$: BehaviorSubject<number>;
  pageIndex$: BehaviorSubject<number>;
  cinemaName: string;
  cinemaId: number;
  routeSub: Subscription;

  constructor(
    private screeningsFacadeService: ScreeningsFacadeService,
    private route: ActivatedRoute
  ) {
    this.screeningsData$ = this.screeningsFacadeService.screenings$;
    this.screeningsDisplayColumns = this.screeningsColumns.map(c => c.columnDef);
    this.totalScreenings$ = this.screeningsFacadeService.totalScreenings$;
    this.pageSize$ = this.screeningsFacadeService.pageSize$;
    this.pageIndex$ = this.screeningsFacadeService.page$;
   }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.cinemaName = params['name'] || '';
      this.cinemaId = params['cinemaId'];
      this.screeningsFacadeService.cinemaId = this.cinemaId;
      this.onPageChange({
        size: this.pageSize$.value,
        page: this.pageIndex$.value
      });
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  onPageChange(event: BaseRequest): void {
    this.screeningsFacadeService.loadScreenings({
      cinemaId: this.cinemaId,
      size: event.size,
      page: event.page
    });
  }

  addBooking(element: ScreeningDTO): void {
    this.screeningsFacadeService.addScreeningDialog(element.id);
  }

}
