import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-cinema',
  templateUrl: './create-cinema-dialog.component.html',
  styleUrls: ['./create-cinema-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateCinemaDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateCinemaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

}
