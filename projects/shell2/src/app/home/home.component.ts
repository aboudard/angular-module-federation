import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCount } from '../store/counter.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  counter$: Observable<number>;

  constructor(
    private store: Store
  ) {
    this.counter$ = store.select(getCount);
  }

}
