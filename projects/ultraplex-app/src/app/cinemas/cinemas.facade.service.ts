import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { BaseRequest, CinemaDTO } from '@ultraplex-app/api';
import { ICinemasState, LoadCinemas, selectCinemas, selectCinemasTotal } from '@ultraplex-app/core';
import { Observable } from 'rxjs';

@Injectable()
export class CinemasFacadeService {

  cinemas$: Observable<CinemaDTO[]>;
  totalCinemas$: Observable<number>;

  constructor(
    private store: Store<ICinemasState>
  ) {
    this.cinemas$ = this.store.pipe(select(selectCinemas));
    this.totalCinemas$ = this.store.pipe(select(selectCinemasTotal));
  }

  loadCinemas(payload: BaseRequest) {
    this.store.dispatch(new LoadCinemas(payload));
  }
}
