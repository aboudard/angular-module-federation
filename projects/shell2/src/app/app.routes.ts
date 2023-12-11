import { Routes } from "@angular/router";

export const appRoutes: Routes = [
    { 
        path: 'home', loadChildren: () => import('./home/home.routes').then(m => m.homeRoutes)
      },
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      }
];