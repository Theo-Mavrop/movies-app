import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from '../@shared/common/components/data-table/data-table.module';
import { CreateDialogModule } from '../@shared/common/components/create-dialog/create-dialog.module';
import { SnackBarService } from '../@shared/common/services/snackbar.service';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesFacadeService } from './movies.facade.service';
import { MoviesCoreModule } from '@movies-app/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    MoviesListComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MoviesCoreModule,
    DataTableModule,
    CreateDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    MoviesFacadeService,
    SnackBarService
  ],
  exports: [
  ]
})
export class MoviesModule {}
