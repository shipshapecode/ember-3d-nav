'use strict';



;define("dummy/app", ["exports", "ember-resolver", "ember-load-initializers", "dummy/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("dummy/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("dummy/components/nav-container/component", ["exports", "ember-3d-nav/components/nav-container"], function (_exports, _navContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _navContainer.default;
    }
  });
});
;define("dummy/components/nav-item/component", ["exports", "ember-3d-nav/components/nav-item/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/nav-items-container/component", ["exports", "ember-3d-nav/components/nav-items-container"], function (_exports, _navItemsContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _navItemsContainer.default;
    }
  });
});
;define("dummy/components/nav-marker/component", ["exports", "ember-3d-nav/components/nav-marker"], function (_exports, _navMarker) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _navMarker.default;
    }
  });
});
;define("dummy/components/nav-trigger-container/component", ["exports", "ember-3d-nav/components/nav-trigger-container/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/nav-trigger/component", ["exports", "ember-3d-nav/components/nav-trigger"], function (_exports, _navTrigger) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _navTrigger.default;
    }
  });
});
;define("dummy/ember-3d-nav/tests/addon.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | addon');
  QUnit.test('addon/components/nav-container.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nav-container.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nav-item/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nav-item/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nav-items-container.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nav-items-container.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nav-marker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nav-marker.js should pass ESLint\n\n');
  });
  QUnit.test('addon/components/nav-trigger-container/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/nav-trigger-container/component.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/debounced-response.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/debounced-response.js should pass ESLint\n\n');
  });
  QUnit.test('addon/mixins/responds-to-scroll.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/responds-to-scroll.js should pass ESLint\n\n');
  });
  QUnit.test('addon/services/ember-3d-nav.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/services/ember-3d-nav.js should pass ESLint\n\n');
  });
  QUnit.test('addon/utils.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils.js should pass ESLint\n\n');
  });
});
;define("dummy/ember-3d-nav/tests/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app/components/nav-container/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nav-container/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nav-item/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nav-item/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nav-items-container/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nav-items-container/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nav-marker/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nav-marker/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nav-trigger-container/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nav-trigger-container/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/components/nav-trigger/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/nav-trigger/component.js should pass ESLint\n\n');
  });
  QUnit.test('app/helpers/math.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/helpers/math.js should pass ESLint\n\n');
  });
  QUnit.test('app/services/ember-3d-nav.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/services/ember-3d-nav.js should pass ESLint\n\n');
  });
});
;define("dummy/ember-3d-nav/tests/templates.template.lint-test", [], function () {
  "use strict";
});
;define("dummy/helpers/math", ["exports", "ember-3d-nav/helpers/math"], function (_exports, _math) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _math.default;
    }
  });
  Object.defineProperty(_exports, "math", {
    enumerable: true,
    get: function () {
      return _math.math;
    }
  });
});
;define("dummy/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("dummy/initializers/export-application-global", ["exports", "dummy/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("dummy/initializers/install-devtools", ["exports", "ember-chrome-devtools/initializers/install-devtools"], function (_exports, _installDevtools) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _installDevtools.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _installDevtools.initialize;
    }
  });
});
;define("dummy/router", ["exports", "dummy/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('home', {
      path: '/'
    });
    this.route('technologies');
    this.route('team');
    this.route('portfolio');
    this.route('contact');
  });
});
;define("dummy/routes/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model() {
      return {
        links: [{
          href: '#0',
          text: 'About',
          type: 'href'
        }, {
          href: '#1',
          text: 'Technologies',
          type: 'href'
        }, {
          linkTo: 'team',
          text: 'Team',
          type: 'linkTo'
        }, {
          linkTo: 'portfolio',
          text: 'Portfolio',
          type: 'linkTo'
        }, {
          href: '#4',
          text: 'Contact',
          type: 'href'
        }]
      };
    }

  });

  _exports.default = _default;
});
;define("dummy/routes/contact", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("dummy/routes/home", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("dummy/routes/portfolio", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("dummy/routes/team", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("dummy/routes/technologies", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("dummy/services/ember-3d-nav", ["exports", "ember-3d-nav/services/ember-3d-nav"], function (_exports, _ember3dNav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ember3dNav.default;
    }
  });
});
;define("dummy/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "VZb+F1ft",
    "block": "{\"symbols\":[\"link\",\"index\"],\"statements\":[[5,\"nav-trigger-container\",[],[[\"@isFixed\",\"@useHeadroom\"],[true,true]],{\"statements\":[[0,\"\\n  \"],[7,\"a\",true],[10,\"href\",\"//shipshape.io\"],[10,\"class\",\"logo\"],[8],[0,\"\\n    \"],[7,\"img\",true],[10,\"src\",\"img/white.svg\"],[10,\"alt\",\"Ship Shape Cthulhu Logo\"],[10,\"height\",\"45px\"],[10,\"width\",\"45px\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\\n\"],[7,\"screen\",true],[10,\"class\",\"main\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"info-text\"],[8],[0,\"\\n    \"],[7,\"h1\",true],[8],[7,\"span\",true],[10,\"class\",\"pacifico\"],[8],[0,\"ember\"],[9],[0,\" 3D NAV\"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"\\n      This Ember addon is based on the amazing work done by CodyHouse on\\n      \"],[7,\"a\",true],[10,\"href\",\"https://codyhouse.co/gem/3d-rotating-navigation/\"],[8],[0,\"3D Rotating Navigation\"],[9],[0,\".\\n      Some changes have been made to convert things into Ember components and try to make it reusable,\\n      but a lot of the original styles have stayed.\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[5,\"nav-container\",[],[[\"@multiColor\"],[true]],{\"statements\":[[0,\"\\n\"],[4,\"each\",[[23,0,[\"model\",\"links\"]]],null,{\"statements\":[[0,\"    \"],[5,\"nav-item\",[],[[\"@index\",\"@link\"],[[23,2,[]],[23,1,[]]]]],[0,\"\\n\"]],\"parameters\":[1,2]},null]],\"parameters\":[]}],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("dummy/app")["default"].create({});
          }
        
//# sourceMappingURL=dummy.map
