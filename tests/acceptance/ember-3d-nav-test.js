import { scrollTo } from 'ember-native-dom-helpers';
import { visit, click, find, findAll } from '@ember/test-helpers';
import { getScrollTop } from 'ember-3d-nav/utils';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import wait from 'ember-test-helpers/wait';

module('Acceptance | Nav menu behavior', function (hooks) {
  setupApplicationTest(hooks);

  test('clicking menu button opens nav', async function (assert) {
    assert.expect(2);

    await visit('/');

    assert.false(
      find('.ember-3d-nav-container').classList.contains('nav-is-visible'),
      'nav-is-visible class not applied initially'
    );

    await click(find('.nav-trigger'));

    assert.true(
      find('.ember-3d-nav-container').classList.contains('nav-is-visible'),
      'nav-is-visible class applied after clicking menu button'
    );
  });

  test('clicking an option selects it and closes the menu', async function (assert) {
    assert.expect(4);

    const done = assert.async();

    await visit('/');

    assert.false(
      find('.ember-3d-nav-container').classList.contains('nav-is-visible'),
      'nav-is-visible class not applied initially'
    );

    await click(find('.nav-trigger'));

    assert.true(
      find('.ember-3d-nav-container').classList.contains('nav-is-visible'),
      'nav-is-visible class applied after clicking menu button'
    );

    await click(findAll('.flexi-centered')[2]);

    assert.true(
      findAll('.flexi-centered')[2].classList.contains('is-selected'),
      'nav item is selected'
    );

    return wait().then(() => {
      setTimeout(() => {
        assert.false(
          find('.ember-3d-nav-container').classList.contains('nav-is-visible'),
          'nav-is-visible class removed after clicking nav item'
        );
        done();
      }, 2000);
    });
  });

  test('scrolling applies isFixedAndScrolled', async function (assert) {
    assert.expect(5);

    await visit('/');
    assert.deepEqual(getScrollTop(), 0, 'window scroll is 0');

    await scrollTo(window, 0, 50);
    assert.deepEqual(getScrollTop(), 50, 'window scroll is 50');

    assert.true(
      find('.nav-trigger-container').classList.contains(
        'is-fixed-and-scrolled'
      ),
      'is-fixed-and-scrolled applied'
    );

    await scrollTo(window, 0, 0);
    assert.deepEqual(getScrollTop(), 0, 'window scroll is 0');

    assert.false(
      find('.nav-trigger-container').classList.contains(
        'is-fixed-and-scrolled'
      ),
      'is-fixed-and-scrolled removed'
    );
  });
});
