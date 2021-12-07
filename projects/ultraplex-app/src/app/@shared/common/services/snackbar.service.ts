import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnackBarService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  openSnackBar(msg: string, cssClass: string) {
    this._snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: cssClass
    })
  }

}
