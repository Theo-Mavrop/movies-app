import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { ApplicationModule } from '@movies-app/core';
import { environment } from '../environments/environment';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    MatSidenavModule,
    MatToolbarModule,
    AppRoutingModule,
    ApplicationModule.forRoot({
      baseUrl: environment.baseUrl
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
