/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-3d-nav',
  included() {
    this._super.included.apply(this, arguments);
    if (process.env.EMBER_CLI_FASTBOOT !== 'true') {
      this.import('vendor/headroom.min.js');
    }
  }
};
