import { Component, OnInit } from '@angular/core';
import { CustomManifest, CustomRemoteConfig } from './utils/config';
import { Router } from '@angular/router';
import { getManifest, loadManifest } from '@angular-architects/module-federation';
import { buildRoutes } from './utils/routes';
import { Store } from '@ngrx/store';
import { getUser } from 'core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shell2';
  remotes: CustomRemoteConfig[] = [];
  user$ = this.store.select(getUser);

  constructor(
    private router: Router,
    private store: Store
    ) {}

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
