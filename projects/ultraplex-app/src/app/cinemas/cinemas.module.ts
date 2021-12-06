import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemasListComponent } from './cinemas-list/cinemas-list.component';
import { CinemasRoutingModule } from './cinemas-routing.module';
import { DataTableModule } from '../@shared/common/components/data-table/data-table.module';
import { CinemasCoreModule } from '@ultraplex-app/core';
import { CinemasFacadeService } from './cinemas.facade.service';


@NgModule({
  declarations: [

    CinemasListComponent
  ],
  imports: [
    CommonModule,
    CinemasRoutingModule,
    CinemasCoreModule,
    DataTableModule
  ],
  providers: [
    CinemasFacadeService
  ],
  exports: [

    CinemasListComponent
  ]
})
export class CinemasModule {}
