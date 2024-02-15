import { Routes } from "@angular/router";
import { CustomManifest } from "./config";
import { loadRemoteModule } from "@angular-architects/module-federation";
import { appRoutes } from "../app.routes";

export function buildRoutes(options: CustomManifest): Routes {

    const lazyRoutes: Routes = Object.keys(options).map(key => {
        const entry = options[key];
        return {
            path: entry.routePath,
            title: entry.displayName,
            loadChildren: () => 
                loadRemoteModule({
                    type: 'manifest',
                    remoteName: key,
                    exposedModule: entry.exposedModule
                })
                .then(m => m[entry.ngRoutes])
        }
    });

    return [...appRoutes, ...lazyRoutes];
}