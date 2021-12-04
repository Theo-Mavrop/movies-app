import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const materuialModules: any[] = [];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materuialModules
  ],
  exports: [
    ...materuialModules
  ]
})
export class MaterialModule {}
