import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | nav marker', function(hooks) {
  setupTest(hooks);

  test('calculate colorNumber: not multiColor', function(assert) {
    assert.expect(1);
    const navMarker = this.owner.factoryFor('component:nav-marker').create();

    navMarker.set('multiColor', false);
    assert.equal(navMarker.get('colorNumber'), 'color-1');
  });

  test('calculate colorNumber: multiColor', function(assert) {
    assert.expect(1);
    const navMarker = this.owner.factoryFor('component:nav-marker').create();

    navMarker.set('multiColor', true);
    assert.equal(navMarker.get('colorNumber'), 'color-1');
  });
});