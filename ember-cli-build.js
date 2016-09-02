/* jshint node:true*/
/* global require, module */
let EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
let shim = require('flexi/lib/pod-templates-shim');

shim(EmberAddon);

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // autoprefixer: {
    //   browsers: ['> 5%', 'IE >= 10']
    // },
    'ember-cli-qunit': {
      useLintTree: false
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
