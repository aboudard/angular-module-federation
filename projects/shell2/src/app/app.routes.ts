import { Routes } from "@angular/router";

export const appRoutes: Routes = [
    { 
        path: 'home', loadChildren: () => import('./home/home.routes').then(m => m.homeRoutes), title: 'Home'
      },
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      }
];