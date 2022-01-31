import {
  visit,
  click,
  find,
  findAll,
  waitUntil,
  settled,
} from '@ember/test-helpers';
import { getScrollTop } from 'ember-3d-nav/utils';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

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

    await settled();

    setTimeout(() => {
      assert.false(
        find('.ember-3d-nav-container').classList.contains('nav-is-visible'),
        'nav-is-visible class removed after clicking nav item'
      );
      done();
    }, 2000);
  });

  test('scrolling applies isFixedAndScrolled', async function (assert) {
    assert.expect(3);

    await visit('/');
    assert.deepEqual(getScrollTop(), 0, 'window scroll is 0');

    window.scrollTo(0, 50);
    await waitUntil(
      function () {
        return getScrollTop() === 50;
      },
      { timeout: 2000 }
    );
    await settled();

    await waitUntil(
      function () {
        return find('.nav-trigger-container').classList.contains(
          'is-fixed-and-scrolled'
        );
      },
      { timeout: 2000 }
    );

    assert.dom('.nav-trigger-container').hasClass('is-fixed-and-scrolled');

    window.scrollTo(0, 0);
    await waitUntil(
      function () {
        return getScrollTop() === 0;
      },
      { timeout: 2000 }
    );

    await settled();

    await waitUntil(
      function () {
        return !find('.nav-trigger-container').classList.contains(
          'is-fixed-and-scrolled'
        );
      },
      { timeout: 2000 }
    );

    assert
      .dom('.nav-trigger-container')
      .doesNotHaveClass('is-fixed-and-scrolled');
  });
});
