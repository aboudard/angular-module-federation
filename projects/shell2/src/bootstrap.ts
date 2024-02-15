import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './app/store';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, TitleStrategy } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { CustomPageTitleStrategy } from './app/services/custom-page-title-strategy';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      CoreModule, // TODO: this allows us to get the core store, but it can be used in any Microfrontend
      StoreModule.forRoot(reducers, { metaReducers }),
      !environment.production ? StoreDevtoolsModule.instrument() : []
    ),
    {
      provide: TitleStrategy,
        useClass: CustomPageTitleStrategy
    }
  ],
}).catch((err) => console.error(err));
