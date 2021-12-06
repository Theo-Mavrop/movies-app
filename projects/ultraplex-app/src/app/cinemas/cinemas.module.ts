import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemasListComponent } from './cinemas-list/cinemas-list.component';
import { CinemasRoutingModule } from './cinemas-routing.module';
import { DataTableModule } from '../@shared/common/components/data-table/data-table.module';
import { CinemasCoreModule } from '@ultraplex-app/core';
import { CinemasFacadeService } from './cinemas.facade.service';
import { MaterialModule } from '../@shared/material/material.module';
import { CreateCinemaDialogComponent } from './create-cinema-dialog/create-cinema-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CinemasListComponent,
    CreateCinemaDialogComponent
  ],
  imports: [
    CommonModule,
    CinemasRoutingModule,
    CinemasCoreModule,
    DataTableModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CinemasFacadeService
  ],
  exports: [
  ]
})
export class CinemasModule {}
