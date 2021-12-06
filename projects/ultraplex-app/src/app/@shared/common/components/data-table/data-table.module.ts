import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { MaterialModule } from '../../../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    DataTableComponent
  ],
  declarations: [
    DataTableComponent
  ],
  providers: [],
})
export class DataTableModule { }
