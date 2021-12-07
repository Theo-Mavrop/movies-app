import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BaseCreateRequest, BaseRequest, CinemaDTO } from '@ultraplex-app/api';
import { CreateCinema, getCinemasError, getCreateError, ICinemasState, isCreated, LoadCinemas, selectCinemas, selectCinemasTotal } from '@ultraplex-app/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { SnackBarService } from '../@shared/common/services/snackbar.service';

@Injectable()
export class CinemasFacadeService {

  cinemas$: Observable<CinemaDTO[]>;
  totalCinemas$: Observable<number>;

  constructor(
    private store: Store<ICinemasState>,
    private snackbarService: SnackBarService
  ) {
    this.cinemas$ = this.store.pipe(select(selectCinemas));
    this.totalCinemas$ = this.store.pipe(select(selectCinemasTotal));

    this.store.pipe(
      select(getCinemasError),
      filter(val => val !== null)
    ).subscribe((error) => {
      this.snackbarService.openSnackBar('Failed to load cinemas', 'error')
    });

    this.store.pipe(
      select(isCreated),
      filter(val => val !== null && val)
    ).subscribe((done) => {
      this.loadCinemas({
        page: 0,
        size: 10
      });
      this.snackbarService.openSnackBar('Cinema was created successfully!!!', 'success');
    });
    this.store.pipe(
      select(getCreateError),
      filter(val => val !== null)
    ).subscribe((error) => {
      this.snackbarService.openSnackBar('Error while creating cinema', 'error');
    });
  }

  loadCinemas(payload: BaseRequest) {
    this.store.dispatch(new LoadCinemas(payload));
  }

  createCinema(payload: BaseCreateRequest) {
    this.store.dispatch(new CreateCinema(payload))
  }
}
