import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesApiService } from './movies.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [],
  providers: [
    MoviesApiService
  ]
})
export class MoviesApiModule {}
