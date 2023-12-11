import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { getHasFlights } from './store/selectors';
import { Observable } from 'rxjs';
import { CoreService, User, getUser } from 'core';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-flights',
    templateUrl: './flights.component.html',
    styleUrls: ['./flights.component.scss'],
    standalone: true,
    imports: [AsyncPipe]
})
export class FlightsComponent {
  
  hasFlights$: Observable<boolean> = inject(Store).select(getHasFlights);
  user$: Observable<User> = inject(Store).select(getUser);
  coreService = inject(CoreService)

  getCore(): void {
    alert(this.coreService.getCore());
  }

}
