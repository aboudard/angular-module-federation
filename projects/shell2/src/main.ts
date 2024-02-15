import { loadManifest } from '@angular-architects/module-federation';

Promise.all([
  loadManifest("http://localhost:4400/mf.manifest.json"),

]).catch((err) => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
