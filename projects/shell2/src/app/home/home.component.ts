import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCount } from '../store/counter.selectors';
import { Observable } from 'rxjs';
import { CoreService } from 'core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  counter$: Observable<number>;

  constructor(
    private store: Store,
    private coreService: CoreService
  ) {
    this.counter$ = store.select(getCount);
  }

  getCore(): void {
    alert(this.coreService.getCore());
  }

}
