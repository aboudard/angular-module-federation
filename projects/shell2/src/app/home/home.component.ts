import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCount } from '../store/counter.selectors';
import { Observable } from 'rxjs';
import { CoreService } from 'core';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [AsyncPipe]
})
export class HomeComponent {
  counter$: Observable<number> = inject(Store).select(getCount);
  coreService = inject(CoreService)

  getCore(): void {
    alert(this.coreService.getCore());
  }

}
