import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseRequest, ScreenDTO } from '@ultraplex-app/api';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DataTableColumn } from '../../@shared/common/@models/data-table';
import { ScreensFacadeService } from './screens.facade.service';

@Component({
  selector: 'app-screens-list',
  templateUrl: './screens-list.component.html',
  styleUrls: ['./screens-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScreensListComponent implements OnInit {

  screensColumns: DataTableColumn[] = [
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
  screensData$: Observable<ScreenDTO[]>;
  screensDisplayColumns: string[];
  totalScreens$: Observable<number>;
  pageSize$: BehaviorSubject<number>;
  pageIndex$: BehaviorSubject<number>;
  cinemaName: string;
  cinemaId: string;
  routeSub: Subscription;

  constructor(
    private screensFacadeService: ScreensFacadeService,
    private route: ActivatedRoute
  ) {
    this.screensData$ = this.screensFacadeService.screens$;
    this.screensDisplayColumns = this.screensColumns.map(c => c.columnDef);
    this.totalScreens$ = this.screensFacadeService.totalScreens$;
    this.pageSize$ = this.screensFacadeService.pageSize$;
    this.pageIndex$ = this.screensFacadeService.page$;
   }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.cinemaName = params['name'] || '';
      this.cinemaId = params['cinemaId'];
      this.screensFacadeService.cinemaId = this.cinemaId;
      this.onPageChange({
        size: this.pageSize$.value,
        page: this.pageIndex$.value
      });
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  onPageChange(event: BaseRequest) {
    this.screensFacadeService.loadScreens({
      cinemaId: this.cinemaId,
      size: event.size,
      page: event.page
    });
  }

  onAddScreen(): void {
    this.screensFacadeService.addScreenDialog()
  }

}
