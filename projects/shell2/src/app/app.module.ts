import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomManifest, CustomRemoteConfig } from './utils/config';
import { Router, provideRouter } from '@angular/router';
import { getManifest } from '@angular-architects/module-federation';
import { buildRoutes } from './utils/routes';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
