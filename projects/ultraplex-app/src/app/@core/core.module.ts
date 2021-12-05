import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../@shared/material/material.module';
import { RouterModule } from '@angular/router';
import { LayoutService } from './services/layout.service';
import { NavListComponent } from './components/nav-list/nav-list.component';

const COMPONENTS: any[] = [
  LayoutComponent,
  HeaderComponent,
  NavListComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    ...COMPONENTS
  ],
  providers: [
    LayoutService
  ]
})
export class CoreModule { }
