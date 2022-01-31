import EmberObject from '@ember/object';
import DebouncedResponseMixin from 'ember-3d-nav/mixins/debounced-response';
import { module, test } from 'qunit';

module('Unit | Mixin | debounced response', function () {
  // Replace this with your real tests.
  test('it works', function (assert) {
    const DebouncedResponseObject = EmberObject.extend(DebouncedResponseMixin);
    const subject = DebouncedResponseObject.create();
    assert.ok(subject);
  });
});
