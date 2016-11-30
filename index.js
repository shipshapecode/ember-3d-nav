/* eslint-disable */
'use strict';

module.exports = {
  name: 'ember-3d-nav',
  included: function(app) {
    this._super.included.apply(this, arguments);
    if (process.env.EMBER_CLI_FASTBOOT !== 'true') {

      // Fix for loading it in addons/engines
      if (typeof app.import !== 'function' && app.app) {
        app = app.app;
      }

      app.import('vendor/headroom.min.js');
    }
  }
};
