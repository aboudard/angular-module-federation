import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'flights',
    loadChildren: () =>
      import('./flights/flights.routes').then((m) => m.flightsRoutes),
  },
  {
    path: '',
    redirectTo: 'flights',
    pathMatch: 'full',
  }
];
