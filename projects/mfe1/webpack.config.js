const { withModuleFederationPlugin, share } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe1',

  exposes: {
    './flights': './projects/mfe1/src/app/flights/flights.routes.ts',
    './accounts': './projects/mfe1/src/app/accounts/accounts.routes.ts',
  },

  /*shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },*/

  // Explicitly share packages:
  shared: share({
    "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@ngrx/store": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  })

});
