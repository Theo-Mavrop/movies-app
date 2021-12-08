import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemasListComponent } from './cinemas-list/cinemas-list.component';
import { ScreensListComponent } from './screens-list/screens-list.component';
import { ScreeningsListComponent } from './screenings-list/screenings-list.component';

const routes: Routes = [
  {
    path: '',
    component: CinemasListComponent
  },
  {
    path: ':cinemaId/screens',
    component: ScreensListComponent
  },
  {
    path: ':cinemaId/screenings',
    component: ScreeningsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CinemasRoutingModule {}
