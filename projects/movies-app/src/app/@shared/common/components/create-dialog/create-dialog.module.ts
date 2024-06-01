import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDialogComponent } from './create-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    CreateDialogComponent
  ],
  declarations: [
    CreateDialogComponent
  ],
  providers: [],
})
export class CreateDialogModule { }
