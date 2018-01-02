import EmberObject from '@ember/object';
import RespondsToScrollMixin from 'ember-3d-nav/mixins/responds-to-scroll';
import { module, test } from 'qunit';

module('Unit | Mixin | responds to scroll', function() {
  // Replace this with your real tests.
  test('it works', function(assert) {
    const RespondsToScrollObject = EmberObject.extend(RespondsToScrollMixin);
    const subject = RespondsToScrollObject.create();
    assert.ok(subject);
  });
});