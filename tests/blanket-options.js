/* globals blanket, module */

const options = {
  modulePrefix: 'ember-3d-nav',
  filter: '//.*ember-3d-nav/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    reporters: [ 'lcov' ],
    autostart: true,
    lcovOptions: {
      outputFile: 'lcov.dat',
      renamer(moduleName) {
        let expression = /^ember-3d-nav/;

        return `${moduleName.replace(expression, 'addon')}.js`;
      }
    }
  }
};

if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
