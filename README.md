# AngularModuleFederation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.
In a single Angular workspace, there will be a shell application (shell or shell2) and a microfrontend (mfe1).
The applications are running NgRx Store for demonstration purpose of simple Shell/Microfrontend commnication.

## Core shared library

There is a "core" library that needs to be built.
It contains some dumb service and a simple NgRx store.
Run either `npm run build:core` or `npm run watch:core`

## Running static module federation: shell

Run `npm run start:mfe1` and  `npm run start:shell` for both App and Module app.

## Running dynamic module federation: shell2

Run `npm run serve:mfe1:manifest` to expose the manifest on a specific api like endpoint.
Run `npm run start:mfe1` and `npm run start:shell2` for both App and Module app.

## Pure static load

If we want to check running the pre-built applications with `http-server` hosting, just build and run :
- Run `npm run build:mfe1` and run `npm run start:mfe1:static`
- Run `npm run build:shell2` and run `npm run start:shell2:static`