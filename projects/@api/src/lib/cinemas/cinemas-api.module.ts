import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemasApiService } from './cinemas.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [],
  providers: [
    CinemasApiService
  ]
})
export class CinemasApiModule {}
