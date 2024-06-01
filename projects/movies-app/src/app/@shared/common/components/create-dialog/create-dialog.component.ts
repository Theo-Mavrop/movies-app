import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateDialogData } from '../../@models/create-dialog.models';

@Component({
  selector: 'cm-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreateDialogData,
  ) { }

  ngOnInit(): void {
  }

  isFormDisabled(): boolean {
    let disabled = false;
    this.data.form.forEach((item) => {
      if (item.control.status !== "VALID") {
        disabled = true;
      }
    });
    return disabled;
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }


}
