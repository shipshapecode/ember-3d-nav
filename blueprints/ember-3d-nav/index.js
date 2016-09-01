/* eslint-disable */

'use strict';

module.exports = {
  description: 'Adds ember-headroom addon to consuming app',

  normalizeEntityName: function() {
    // no-op
  },

  afterInstall: function(options) {
    return this.addAddonToProject('ember-headroom');
  }
};
