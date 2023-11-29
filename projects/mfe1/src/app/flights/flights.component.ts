import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getHasFlights } from './store/selectors';
import { Observable } from 'rxjs';
import { CoreService, User, getUser } from 'core';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent {
  
  hasFlights$: Observable<boolean>;
  user$: Observable<User>;

  constructor(
    private store: Store,
    private coreService: CoreService
  ) {
    this.hasFlights$ = store.select(getHasFlights);
    this.user$ = store.select(getUser);
  }

  getCore(): void {
    alert(this.coreService.getCore());
  }

}
