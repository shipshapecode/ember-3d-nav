'use strict';

define("dummy/tests/acceptance/ember-3d-nav-test", ["ember-native-dom-helpers", "@ember/test-helpers", "ember-3d-nav/utils", "qunit", "ember-qunit", "ember-test-helpers/wait"], function (_emberNativeDomHelpers, _testHelpers, _utils, _qunit, _emberQunit, _wait) {
  "use strict";

  (0, _qunit.module)('Acceptance | Nav menu behavior', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('clicking menu button opens nav', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.visit)('/');
      assert.equal((0, _testHelpers.find)('.ember-3d-nav-container').classList.contains('nav-is-visible'), false, 'nav-is-visible class not applied initially');
      await (0, _testHelpers.click)((0, _testHelpers.find)('.nav-trigger'));
      assert.equal((0, _testHelpers.find)('.ember-3d-nav-container').classList.contains('nav-is-visible'), true, 'nav-is-visible class applied after clicking menu button');
    });
    (0, _qunit.test)('clicking an option selects it and closes the menu', async function (assert) {
      assert.expect(4);
      const done = assert.async();
      await (0, _testHelpers.visit)('/');
      assert.equal((0, _testHelpers.find)('.ember-3d-nav-container').classList.contains('nav-is-visible'), false, 'nav-is-visible class not applied initially');
      await (0, _testHelpers.click)((0, _testHelpers.find)('.nav-trigger'));
      assert.equal((0, _testHelpers.find)('.ember-3d-nav-container').classList.contains('nav-is-visible'), true, 'nav-is-visible class applied after clicking menu button');
      await (0, _testHelpers.click)((0, _testHelpers.findAll)('.flexi-centered')[2]);
      assert.equal((0, _testHelpers.findAll)('.flexi-centered')[2].classList.contains('is-selected'), true, 'nav item is selected');
      return (0, _wait.default)().then(() => {
        setTimeout(() => {
          assert.equal((0, _testHelpers.find)('.ember-3d-nav-container').classList.contains('nav-is-visible'), false, 'nav-is-visible class removed after clicking nav item');
          done();
        }, 2000);
      });
    });
    (0, _qunit.test)('scrolling applies isFixedAndScrolled', async function (assert) {
      assert.expect(5);
      await (0, _testHelpers.visit)('/');
      assert.equal((0, _utils.getScrollTop)(), 0, 'window scroll is 0');
      await (0, _emberNativeDomHelpers.scrollTo)(window, 0, 50);
      assert.equal((0, _utils.getScrollTop)(), 50, 'window scroll is 50');
      assert.equal((0, _testHelpers.find)('.nav-trigger-container').classList.contains('is-fixed-and-scrolled'), true, 'is-fixed-and-scrolled applied');
      await (0, _emberNativeDomHelpers.scrollTo)(window, 0, 0);
      assert.equal((0, _utils.getScrollTop)(), 0, 'window scroll is 0');
      assert.equal((0, _testHelpers.find)('.nav-trigger-container').classList.contains('is-fixed-and-scrolled'), false, 'is-fixed-and-scrolled removed');
    });
  });
});
define("dummy/tests/helpers/resolver", ["exports", "dummy/resolver", "dummy/config/environment"], function (_exports, _resolver, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };
  var _default = resolver;
  _exports.default = _default;
});
define("dummy/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });
  QUnit.test('routes/contact.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contact.js should pass ESLint\n\n');
  });
  QUnit.test('routes/home.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home.js should pass ESLint\n\n');
  });
  QUnit.test('routes/portfolio.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/portfolio.js should pass ESLint\n\n');
  });
  QUnit.test('routes/team.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/team.js should pass ESLint\n\n');
  });
  QUnit.test('routes/technologies.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/technologies.js should pass ESLint\n\n');
  });
});
define("dummy/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('dummy/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/application.hbs should pass TemplateLint.\n\n');
  });
});
define("dummy/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('acceptance/ember-3d-nav-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/ember-3d-nav-test.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/components/nav-marker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/components/nav-marker-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/mixins/debounced-response-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/debounced-response-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/mixins/responds-to-scroll-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/responds-to-scroll-test.js should pass ESLint\n\n');
  });
});
define("dummy/tests/lint/true.stylelint-test", [], function () {
  "use strict";

  QUnit.module('Stylelint');
  QUnit.test('index.html should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'index.html should pass stylelint');
  });
  QUnit.test('styles/app.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/app.scss should pass stylelint');
  });
  QUnit.test('styles/fonts.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/fonts.scss should pass stylelint');
  });
});
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("dummy/tests/unit/components/nav-marker-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | nav marker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('calculate colorNumber: not multiColor', function (assert) {
      assert.expect(1);
      const navMarker = this.owner.factoryFor('component:nav-marker').create();
      navMarker.set('multiColor', false);
      assert.equal(navMarker.get('colorNumber'), 'color-1');
    });
    (0, _qunit.test)('calculate colorNumber: multiColor', function (assert) {
      assert.expect(1);
      const navMarker = this.owner.factoryFor('component:nav-marker').create();
      navMarker.set('multiColor', true);
      assert.equal(navMarker.get('colorNumber'), 'color-1');
    });
  });
});
define("dummy/tests/unit/mixins/debounced-response-test", ["ember-3d-nav/mixins/debounced-response", "qunit"], function (_debouncedResponse, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Mixin | debounced response', function () {
    // Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {
      const DebouncedResponseObject = Ember.Object.extend(_debouncedResponse.default);
      const subject = DebouncedResponseObject.create();
      assert.ok(subject);
    });
  });
});
define("dummy/tests/unit/mixins/responds-to-scroll-test", ["ember-3d-nav/mixins/responds-to-scroll", "qunit"], function (_respondsToScroll, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Mixin | responds to scroll', function () {
    // Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {
      const RespondsToScrollObject = Ember.Object.extend(_respondsToScroll.default);
      const subject = RespondsToScrollObject.create();
      assert.ok(subject);
    });
  });
});
define('dummy/config/environment', [], function() {
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

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
