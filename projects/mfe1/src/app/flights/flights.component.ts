import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getHasFlights } from './store/selectors';
import { Observable } from 'rxjs';
import { CoreService } from 'core';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent {
  
  hasFlights$: Observable<boolean>;

  constructor(
    private store: Store,
    private coreService: CoreService
  ) {
    this.hasFlights$ = store.select(getHasFlights);
  }

  getCore(): void {
    alert(this.coreService.getCore());
  }

}
