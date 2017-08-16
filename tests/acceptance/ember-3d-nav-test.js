import { click, find, findAll, scrollTo, visit } from 'ember-native-dom-helpers';
import { getScrollTop } from 'ember-3d-nav/utils';
import { test } from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';
import { run } from '@ember/runloop';

moduleForAcceptance('Nav menu behavior');

test('clicking menu button opens nav', async function(assert) {
  assert.expect(2);

  await visit('/');

  assert.equal(find('.ember-3d-nav-container').classList.contains('nav-is-visible'), false,
    'nav-is-visible class not applied initially');

  await click(find('.nav-trigger'));

  assert.equal(find('.ember-3d-nav-container').classList.contains('nav-is-visible'), true,
    'nav-is-visible class applied after clicking menu button');
});

test('clicking an option selects it and closes the menu', async function(assert) {
  assert.expect(4);

  const done = assert.async();

  await visit('/');

  assert.equal(find('.ember-3d-nav-container').classList.contains('nav-is-visible'), false,
    'nav-is-visible class not applied initially');

  await click(find('.nav-trigger'));

  assert.equal(find('.ember-3d-nav-container').classList.contains('nav-is-visible'), true,
    'nav-is-visible class applied after clicking menu button');

  await click(findAll('centered')[2]);

  assert.equal(findAll('centered')[2].classList.contains('is-selected'), true,
    'nav item is selected');

  run.later(function() {
    assert.equal(find('.ember-3d-nav-container').classList.contains('nav-is-visible'), false,
      'nav-is-visible class removed after clicking nav item');
    done();
  }, 5000);

});

test('scrolling applies isFixedAndScrolled', async function(assert) {
  assert.expect(5);

  await visit('/');
  assert.equal(getScrollTop(), 0, 'window scroll is 0');

  await scrollTo(document.body, 0, 50);
  assert.equal(getScrollTop(), 50, 'window scroll is 50');

  assert.equal(find('.nav-trigger-container').classList.contains('is-fixed-and-scrolled'), true,
    'is-fixed-and-scrolled applied');

  await scrollTo(document.body, 0, 0);
  assert.equal(getScrollTop(), 0, 'window scroll is 0');

  assert.equal(find('.nav-trigger-container').classList.contains('is-fixed-and-scrolled'), false,
    'is-fixed-and-scrolled removed');
});
