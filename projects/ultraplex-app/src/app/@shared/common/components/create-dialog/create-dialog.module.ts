import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';
import { CreateDialogComponent } from './create-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
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
