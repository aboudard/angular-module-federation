import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const appRoutes: Routes = [
    { 
        path: 'home', component: HomeComponent
      },
      {
        path: 'flights',
        loadChildren: () => import('mfe1/routes').then(m => m.flightsRoutes)
      },
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      }
];