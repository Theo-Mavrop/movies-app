import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemasListComponent } from './cinemas-list/cinemas-list.component';
import { CinemasRoutingModule } from './cinemas-routing.module';
import { DataTableModule } from '../@shared/common/components/data-table/data-table.module';
import { CinemasCoreModule } from '@ultraplex-app/core';
import { CinemasFacadeService } from './cinemas.facade.service';
import { MaterialModule } from '../@shared/material/material.module';
import { CreateDialogModule } from '../@shared/common/components/create-dialog/create-dialog.module';
import { SnackBarService } from '../@shared/common/services/snackbar.service';

@NgModule({
  declarations: [
    CinemasListComponent
  ],
  imports: [
    CommonModule,
    CinemasRoutingModule,
    CinemasCoreModule,
    DataTableModule,
    MaterialModule,
    CreateDialogModule,
  ],
  providers: [
    CinemasFacadeService,
    SnackBarService
  ],
  exports: [
  ]
})
export class CinemasModule {}
