/* eslint-disable */
'use strict';

module.exports = {
  name: 'ember-3d-nav',
  included: function(app) {
    this._super.included(app);
    if (process.env.EMBER_CLI_FASTBOOT !== 'true') {

      // Fix for loading it in addons/engines
      if (typeof app.import !== 'function' && app.app) {
        app = app.app;
      }

      app.import('vendor/headroom.min.js');
      app.import('vendor/jQuery.headroom.min.js');
    }
  }
};
