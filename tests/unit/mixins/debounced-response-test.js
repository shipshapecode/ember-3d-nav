import Ember from 'ember';
import DebouncedResponseMixin from 'ember-3d-nav/mixins/debounced-response';
import { module, test } from 'qunit';

module('Unit | Mixin | debounced response');

// Replace this with your real tests.
test('it works', function(assert) {
  let DebouncedResponseObject = Ember.Object.extend(DebouncedResponseMixin);
  let subject = DebouncedResponseObject.create();
  assert.ok(subject);
});
