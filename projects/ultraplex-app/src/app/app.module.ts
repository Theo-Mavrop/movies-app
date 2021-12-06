import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './@shared/material/material.module';
import { ApplicationModule } from '@ultraplex-app/core';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    MaterialModule,
    AppRoutingModule,
    ApplicationModule.forRoot({
      baseUrl: environment.baseUrl
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
