/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-3d-nav',

  options: {
    nodeAssets: {
      'headroom.js': {
        vendor: {
          srcDir: 'dist',
          destDir: 'headroom',
          include: ['headroom.min.js']
        }
      }
    }
  },

  included() {
    this._super.included.apply(this, arguments);
    if (process.env.EMBER_CLI_FASTBOOT !== 'true') {
      this.import('vendor/headroom/headroom.min.js');
    }
  }
};
