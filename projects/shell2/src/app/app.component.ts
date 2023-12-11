import { Component, OnInit, inject } from '@angular/core';
import { CustomManifest, CustomRemoteConfig } from './utils/config';
import { Router, RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { getManifest, loadManifest } from '@angular-architects/module-federation';
import { buildRoutes } from './utils/routes';
import { Store } from '@ngrx/store';
import { getUser } from 'core';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterLinkActive, RouterLink, NgFor, RouterOutlet, AsyncPipe]
})
export class AppComponent implements OnInit {
  title = 'shell2';
  remotes: CustomRemoteConfig[] = [];
  user$ = inject(Store).select(getUser);
  router = inject(Router);

  async ngOnInit(): Promise<void> {

    // http version
    await loadManifest("http://localhost:4400/mf.manifest.json");

    const manifest = getManifest<CustomManifest>();
    console.log('manifest', manifest);

    const routes = buildRoutes(manifest);
    this.router.resetConfig(routes);

    this.remotes = Object.values(manifest);
  }

}
