import Ember from 'ember';
import RespondsToScrollMixin from 'ember-3d-nav/mixins/responds-to-scroll';
import { module, test } from 'qunit';

module('Unit | Mixin | responds to scroll');

// Replace this with your real tests.
test('it works', function(assert) {
  let RespondsToScrollObject = Ember.Object.extend(RespondsToScrollMixin);
  let subject = RespondsToScrollObject.create();
  assert.ok(subject);
});
