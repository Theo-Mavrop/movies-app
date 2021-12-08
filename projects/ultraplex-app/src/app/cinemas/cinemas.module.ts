import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemasListComponent } from './cinemas-list/cinemas-list.component';
import { CinemasRoutingModule } from './cinemas-routing.module';
import { DataTableModule } from '../@shared/common/components/data-table/data-table.module';
import { CinemasCoreModule, ScreeninsCoreModule, ScreensCoreModule } from '@ultraplex-app/core';
import { CinemasFacadeService } from './cinemas.facade.service';
import { MaterialModule } from '../@shared/material/material.module';
import { CreateDialogModule } from '../@shared/common/components/create-dialog/create-dialog.module';
import { SnackBarService } from '../@shared/common/services/snackbar.service';
import { ScreensListComponent } from './screens-list/screens-list.component';
import { ScreensFacadeService } from './screens-list/screens.facade.service';
import { ScreeningsListComponent } from './screenings-list/screenings-list.component';
import { ScreeningsFacadeService } from './screenings-list/screenings.facade.service';

@NgModule({
  declarations: [
    CinemasListComponent,
    ScreensListComponent,
    ScreeningsListComponent
  ],
  imports: [
    CommonModule,
    CinemasRoutingModule,
    CinemasCoreModule,
    ScreensCoreModule,
    ScreeninsCoreModule,
    DataTableModule,
    MaterialModule,
    CreateDialogModule,
  ],
  providers: [
    CinemasFacadeService,
    ScreensFacadeService,
    ScreeningsFacadeService,
    SnackBarService
  ],
  exports: [
  ]
})
export class CinemasModule {}
