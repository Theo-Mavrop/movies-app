import { Injectable } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { CreateScreeningRequest, CreateScreenRequest, ScreenDTO, ScreenRequest } from '@movies-app/api';
import { CreateScreen, CreateScreening, getAllMoviesError, GetAllMoviesList, getScreenCreateError, getScreeningCreateError, getScreensError, IScreensState, isScreenCreated, isScreeningCreated, LoadScreens, selectAllMovies, selectScreens, selectScreensTotal } from '@movies-app/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { FormDialogData, OptionInfo } from '../../@shared/common/@models/create-dialog.models';
import { CreateDialogComponent } from '../../@shared/common/components/create-dialog/create-dialog.component';
import { SnackBarService } from '../../@shared/common/services/snackbar.service';
@Injectable()
export class ScreensFacadeService {

  screens$: Observable<ScreenDTO[]>;
  totalScreens$: Observable<number>;
  pageSize$: BehaviorSubject<number>;
  page$: BehaviorSubject<number>;
  cinemaId: number;
  loadAfterCreate: boolean;
  destroyed$ = new Subject();

  constructor(
    private store: Store<IScreensState>,
    private snackbarService: SnackBarService,
    private dialog: MatDialog,
    private fb: UntypedFormBuilder,
  ) {
    this.screens$ = this.store.pipe(select(selectScreens));
    this.totalScreens$ = this.store.pipe(select(selectScreensTotal));
    this.pageSize$ = new BehaviorSubject(10);
    this.page$ = new BehaviorSubject(0);

    this.store.pipe(
      select(getScreensError),
      filter(val => val !== null),
      takeUntil(this.destroyed$)
    ).subscribe((error) => {
      this.snackbarService.openSnackBar('Failed to load screens', 'error')
    });

    this.store.pipe(
      select(getAllMoviesError),
      filter(val => val !== null),
      takeUntil(this.destroyed$)
    ).subscribe((error) => {
      this.snackbarService.openSnackBar('Failed to load movies', 'error')
    });

    this.store.pipe(
      select(isScreenCreated),
      filter(val => val !== null && val),
      takeUntil(this.destroyed$)
    ).subscribe((done) => {
      if (this.loadAfterCreate) {
        this.loadScreens({
          cinemaId: this.cinemaId,
          page: this.page$.value,
          size: this.pageSize$.value
        });
      }
      this.snackbarService.openSnackBar('Screen was created successfully!!!', 'success');
    });

    this.store.pipe(
      select(getScreenCreateError),
      filter(val => val !== null),
      takeUntil(this.destroyed$)
    ).subscribe((error) => {
      this.snackbarService.openSnackBar('Error while creating screen', 'error');
    });

    this.store.pipe(
      select(isScreeningCreated),
      filter(val => val !== null && val),
      takeUntil(this.destroyed$)
    ).subscribe((done) => {
      if (this.loadAfterCreate) {
        this.loadScreens({
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

  loadScreens(payload: ScreenRequest): void {
    this.page$.next(payload.page);
    this.store.dispatch(new LoadScreens(payload));
  }

  loadAllMovies(): void {
    this.store.dispatch(new GetAllMoviesList());
  }

  createScreen(payload: CreateScreenRequest): void {
    this.store.dispatch(new CreateScreen(payload))
  }

  createScreening(payload: CreateScreeningRequest): void {
    this.store.dispatch(new CreateScreening(payload))
  }

  addScreenDialog(cinemaId: number = null): void {

    const form: FormDialogData[] = [
      {
        label: 'Name',
        controlName: 'name',
        controlType: 'text',
        control: this.fb.group(
          { name: ['', [Validators.required]] }
        )
      }
    ];
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '25rem',
      data: { title: 'Create screen' , form }
    });

    dialogRef.afterClosed().subscribe((result: FormDialogData) => {
      if (result) {
        this.loadAfterCreate = cinemaId ? false : true;
        this.createScreen({
          cinemaId: cinemaId || this.cinemaId,
          name: result[0].control.get('name').value,
        });
      }
    })
  }

  addScreeningDialog(cinemaId: number, screenId: number): void {
    this.loadAllMovies();

    const form: FormDialogData[] = [
      {
        label: 'Movie',
        controlName: 'movieId',
        controlType: 'select',
        options$: this.store.pipe(
          select(selectAllMovies),
          map((movies) => {
            return movies?.map((opt) => {
              return {id: opt.id, text: opt.name};
          })
        } )),
        control: this.fb.group(
          { movieId: ['', [Validators.required]] }
        )
      },
      {
        label: 'Start time',
        controlName: 'startTime',
        controlType: 'dateTime',
        control: this.fb.group(
          { startTime: ['', [Validators.required]] }
        )
      }
    ];
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      width: '25rem',
      data: { title: 'Create screening' , form }
    });

    dialogRef.afterClosed().subscribe((result: FormDialogData) => {
      if (result) {
        this.createScreening({
          cinemaId: this.cinemaId,
          screenId: screenId,
          movieId: result[0].control.get('movieId').value,
          startTime: result[1].control.get('startTime').value
        });
      }
    })
  }

}

