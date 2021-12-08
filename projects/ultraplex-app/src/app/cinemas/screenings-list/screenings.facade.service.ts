import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { CreateScreeningRequest, ScreeningDTO, ScreeningRequest } from '@ultraplex-app/api';
import { CreateScreening, getScreeningCreateError, getScreeningsError, IScreeningsState, isScreeningCreated, LoadScreenings, selectScreenings, selectScreeningsTotal } from '@ultraplex-app/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { FormDialogData } from '../../@shared/common/@models/create-dialog.models';
import { CreateDialogComponent } from '../../@shared/common/components/create-dialog/create-dialog.component';
import { SnackBarService } from '../../@shared/common/services/snackbar.service';

@Injectable()
export class ScreeningsFacadeService {

  screenings$: Observable<ScreeningDTO[]>;
  totalScreenings$: Observable<number>;
  pageSize$: BehaviorSubject<number>;
  page$: BehaviorSubject<number>;
  cinemaId: number;
  loadAfterCreate: boolean;
  destroyed$ = new Subject();

  constructor(
    private store: Store<IScreeningsState>,
    private snackbarService: SnackBarService,
    private dialog: MatDialog,
    private fb: FormBuilder,
  ) {
    this.screenings$ = this.store.pipe(select(selectScreenings));
    this.totalScreenings$ = this.store.pipe(select(selectScreeningsTotal));
    this.pageSize$ = new BehaviorSubject(10);
    this.page$ = new BehaviorSubject(0);

    this.store.pipe(
      select(getScreeningsError),
      filter(val => val !== null),
      takeUntil(this.destroyed$)
    ).subscribe((error) => {
      this.snackbarService.openSnackBar('Failed to load screenings', 'error')
    });

    this.store.pipe(
      select(isScreeningCreated),
      filter(val => val !== null && val),
      takeUntil(this.destroyed$)
    ).subscribe((done) => {
      if (this.loadAfterCreate) {
        this.loadScreenings({
          cinemaId: this.cinemaId,
          page: this.page$.value,
          size: this.pageSize$.value
        });
      }
      this.snackbarService.openSnackBar('Screening was created successfully!!!', 'success');
    });

    this.store.pipe(
      select(getScreeningCreateError),
      filter(val => val !== null),
      takeUntil(this.destroyed$)
    ).subscribe((error) => {
      this.snackbarService.openSnackBar('Error while creating screening', 'error');
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  loadScreenings(payload: ScreeningRequest): void {
    this.page$.next(payload.page);
    this.store.dispatch(new LoadScreenings(payload));
  }

  createScreening(payload: CreateScreeningRequest): void {
    this.store.dispatch(new CreateScreening(payload))
  }

  addScreeningDialog(screenId: number): void {;

    const form: FormDialogData[] = [
      {
        label: 'Seat',
        controlName: 'seat',
        controlType: 'number',
        control: this.fb.group(
          { seat: ['', [Validators.required, Validators.min(0)]] }
        )
      }
    ];
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '25rem',
      data: { title: 'Create booking' , form }
    });

    dialogRef.afterClosed().subscribe((result: FormDialogData) => {
      if (result) {

      }
    })
  }

}

