import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IDashboardState, LoadTotalBookings, LoadTotalCinemas, LoadTotalMovies, selectTotalBookings, selectTotalCinemas, selectTotalMovies, selectTotalScreens } from '@movies-app/core';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardFacadeService {

  totalCinemas$: Observable<number>;
  totalScreens$: Observable<number>;
  totalMovies$: Observable<number>;
  totalBookings$: Observable<number>;

  constructor(
    private store: Store<IDashboardState>
  ) {
    this.totalCinemas$ = this.store.pipe(select(selectTotalCinemas));
    this.totalScreens$ = this.store.pipe(select(selectTotalScreens));
    this.totalMovies$ = this.store.pipe(select(selectTotalMovies));
    this.totalBookings$ = this.store.pipe(select(selectTotalBookings));
  }

  loadTotalCinemas() {
    this.store.dispatch(new LoadTotalCinemas());
  }

  loadTotalMovies() {
    this.store.dispatch(new LoadTotalMovies());
  }

  LoadTotalBookings() {
    this.store.dispatch(new LoadTotalBookings());
  }

}
