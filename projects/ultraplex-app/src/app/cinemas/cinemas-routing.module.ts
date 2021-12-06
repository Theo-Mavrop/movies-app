import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemasListComponent } from './cinemas-list/cinemas-list.component';

const routes: Routes = [
  {
    path: '',
    component: CinemasListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CinemasRoutingModule {}
