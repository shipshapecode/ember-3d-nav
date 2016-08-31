/* eslint-disable */
'use strict';

module.exports = {
  name: 'ember-3d-nav',
  included: function(app) {
    this._super.included(app);
    if (!process.env.EMBER_CLI_FASTBOOT) {
      this.app.import('vendor/headroom.min.js');
    }
  }
};
