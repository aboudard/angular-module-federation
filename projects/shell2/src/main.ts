import { loadManifest } from '@angular-architects/module-federation';

// static version
/*loadManifest("/assets/mf.manifest.json")
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));*/

import('./bootstrap')
  .catch(err => console.error(err));