# AngularModuleFederation

Current version is compatible with Angular 15.
In a single Angular workspace, there will be a shell application (shell or shell2) and a microfrontend (mfe1).
The applications are running NgRx Store for demonstration purpose of simple Shell/Microfrontend commnication.

The `shell` application loads the micro frontend app eagerly, the mfe1 route is declared in the app route configuration.
The `shell2` application loads the micro frontand dynamicaly, through an endpoint that exposes the parameters of the mfe1 routing.

## Core shared library

There is a "core" library that needs to be built.
It contains some dumb service and a simple NgRx store.
Run either `npm run build:core` or `npm run watch:core`

## Running static module federation: shell

Run `npm run start:all` for both App and Module app.

## Running dynamic module federation: shell2

Run `npm run start:all2` for both App and Module app and to expose the manifest on a specific api like endpoint.

## Pure static load

If we want to check running the pre-built applications with `http-server` hosting, just build and run :
- Run `npm run build:mfe1` and run `npm run start:mfe1:static`
- Run `npm run build:shell2` and run `npm run start:shell2:static`

# Versions
Commit tagged v14 is compatible with Angular 14.
Commit tagged v15 is compatible with Angular 15, with standalone routing.