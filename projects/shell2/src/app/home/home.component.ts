import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCount } from '../store/counter.selectors';
import { Observable } from 'rxjs';
import { CoreService } from 'core';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [AsyncPipe, FormsModule]
})
export class HomeComponent {
  counter$: Observable<number> = inject(Store).select(getCount);
  coreService = inject(CoreService);
  a = 1;
  b = 2;

  getCore(): void {
    alert(this.coreService.getCore());
  }

}
