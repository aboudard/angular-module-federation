import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { getUser } from 'core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterLinkActive, RouterLink, RouterOutlet, AsyncPipe]
})
export class AppComponent {
  title = 'shell';
  user$ = inject(Store).select(getUser);
}
