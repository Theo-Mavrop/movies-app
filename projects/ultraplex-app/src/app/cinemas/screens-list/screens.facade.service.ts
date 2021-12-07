import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CreateScreenRequest, ScreenDTO, ScreenRequest } from '@ultraplex-app/api';
import { CreateScreen, getScreenCreateError, getScreensError, IScreensState, isScreenCreated, LoadScreens, selectScreens, selectScreensTotal } from '@ultraplex-app/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { SnackBarService } from '../../@shared/common/services/snackbar.service';

@Injectable()
export class ScreensFacadeService {

  screens$: Observable<ScreenDTO[]>;
  totalScreens$: Observable<number>;
  pageSize$: BehaviorSubject<number>;
  page$: BehaviorSubject<number>;
  cinemaId: string;

  constructor(
    private store: Store<IScreensState>,
    private snackbarService: SnackBarService
  ) {
    this.screens$ = this.store.pipe(select(selectScreens));
    this.totalScreens$ = this.store.pipe(select(selectScreensTotal));
    this.pageSize$ = new BehaviorSubject(10);
    this.page$ = new BehaviorSubject(0);

    this.store.pipe(
      select(getScreensError),
      filter(val => val !== null)
    ).subscribe((error) => {
      this.snackbarService.openSnackBar('Failed to load screens', 'error')
    });

    this.store.pipe(
      select(isScreenCreated),
      filter(val => val !== null && val)
    ).subscribe((done) => {
      this.loadScreens({
        cinemaId: this.cinemaId,
        page: this.page$.value,
        size: this.pageSize$.value
      });
      this.snackbarService.openSnackBar('Screen was created successfully!!!', 'success');
    });
    this.store.pipe(
      select(getScreenCreateError),
      filter(val => val !== null)
    ).subscribe((error) => {
      this.snackbarService.openSnackBar('Error while creating screen', 'error');
    });
  }

  loadScreens(payload: ScreenRequest) {
    this.page$.next(payload.page);
    this.store.dispatch(new LoadScreens(payload));
  }

  createScreen(payload: CreateScreenRequest) {
    this.store.dispatch(new CreateScreen(payload))
  }
}
