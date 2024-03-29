import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'flights',
    loadChildren: () =>
      import('./flights/flights.routes').then((m) => m.flightsRoutes),
  },
  {
    path: 'accounts',
    loadChildren: () =>
      import('./accounts/accounts.routes').then((m) => m.accountsRoutes),
  },
  {
    path: '',
    redirectTo: 'flights',
    pathMatch: 'full',
  }
];
