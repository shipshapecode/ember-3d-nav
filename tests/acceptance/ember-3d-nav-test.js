import Ember from 'ember';
import { test } from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';
const { $, run } = Ember;

moduleForAcceptance('Nav menu behavior');

test('clicking menu button opens nav', function(assert) {
  assert.expect(2);

  visit('/');
  andThen(function() {
    assert.equal(find('.ember-3d-nav-container').hasClass('nav-is-visible'), false, 'nav-is-visible class not applied initially');
  });
  click('.nav-trigger');
  andThen(function() {
    assert.equal(find('.ember-3d-nav-container').hasClass('nav-is-visible'), true, 'nav-is-visible class applied after clicking menu button');
  });
});

test('clicking an option selects it and closes the menu', function(assert) {
  assert.expect(4);

  visit('/');
  andThen(function() {
    assert.equal(find('.ember-3d-nav-container').hasClass('nav-is-visible'), false, 'nav-is-visible class not applied initially');
  });
  click('.nav-trigger');
  andThen(function() {
    assert.equal(find('.ember-3d-nav-container').hasClass('nav-is-visible'), true, 'nav-is-visible class applied after clicking menu button');
  });
  run.scheduleOnce('afterRender', this, function() {
    click('centered:nth-of-type(2)');
    andThen(function() {
      assert.equal(find('centered:nth-of-type(2)').hasClass('is-selected'), true, 'nav item is selected');
      assert.equal(find('.ember-3d-nav-container').hasClass('nav-is-visible'), false, 'nav-is-visible class removed after clicking nav item');
    });
  });
});

test('scrolling applies isFixedAndScrolled', function(assert) {
  assert.expect(5);

  visit('/');
  andThen(function() {
    assert.equal($(window).scrollTop(), 0, 'window scroll is 0');
    $(window).scrollTop(50);
    assert.equal($(window).scrollTop(), 50, 'window scroll is 50');
    run.later(this, function() {
      assert.equal(find('.nav-trigger-container').hasClass('is-fixed-and-scrolled'), true, 'is-fixed-and-scrolled applied');
      $(window).scrollTop(0);
      assert.equal($(window).scrollTop(), 0, 'window scroll is 0');
      run.later(this, function() {
        assert.equal(find('.nav-trigger-container').hasClass('is-fixed-and-scrolled'), false, 'is-fixed-and-scrolled removed');
      }, 100);
    }, 100);
  });
});
