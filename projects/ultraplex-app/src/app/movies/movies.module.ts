import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from '../@shared/common/components/data-table/data-table.module';
import { MaterialModule } from '../@shared/material/material.module';
import { CreateDialogModule } from '../@shared/common/components/create-dialog/create-dialog.module';
import { SnackBarService } from '../@shared/common/services/snackbar.service';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesFacadeService } from './movies.facade.service';
import { MoviesCoreModule } from '@ultraplex-app/core';

@NgModule({
  declarations: [
    MoviesListComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MoviesCoreModule,
    DataTableModule,
    MaterialModule,
    CreateDialogModule,
  ],
  providers: [
    MoviesFacadeService,
    SnackBarService
  ],
  exports: [
  ]
})
export class MoviesModule {}
