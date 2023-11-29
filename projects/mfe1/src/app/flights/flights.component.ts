import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getHasFlights } from './store/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent {
  
  hasFlights$: Observable<boolean>;

  constructor(
    private store: Store
  ) {
    this.hasFlights$ = store.select(getHasFlights);
  }

}
