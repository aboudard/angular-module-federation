import { Manifest, RemoteConfig } from "@angular-architects/module-federation";

export type CustomRemoteConfig = RemoteConfig & {
    exposedModule: string;
    displayName: string;
    routePath: string;
    ngRoutes: string;
};

export type CustomManifest = Manifest<CustomRemoteConfig>;