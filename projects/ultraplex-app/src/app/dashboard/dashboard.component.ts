import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardFacadeService } from './dashboard.facade.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  totalCinemas$: Observable<number>;
  totalScreens$: Observable<number>;
  totalMovies$: Observable<number>;
  totalBookings$: Observable<number>;

  constructor(
    private dashboardFacade: DashboardFacadeService,
  ) {
    this.totalCinemas$ = this.dashboardFacade.totalCinemas$;
    this.totalScreens$ = this.dashboardFacade.totalScreens$;
    this.totalMovies$ = this.dashboardFacade.totalMovies$;
    this.totalBookings$ = this.dashboardFacade.totalBookings$;
  }

  ngOnInit(): void {
    this.dashboardFacade.loadTotalCinemas();
    this.dashboardFacade.loadTotalMovies();
    this.dashboardFacade.LoadTotalBookings();
  }

}
