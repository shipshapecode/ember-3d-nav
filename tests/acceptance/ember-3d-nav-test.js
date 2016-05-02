import Ember from 'ember';
import {test} from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';

moduleForAcceptance('Nav menu open/close/select behavior');

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
  Ember.run.scheduleOnce('afterRender', this, function(){
    click('centered:nth-of-type(2)');
    Ember.run.scheduleOnce('afterRender', this, function(){
      assert.equal(find('centered:nth-of-type(2)').hasClass('is-selected'), true, 'nav item is selected');
      assert.equal(find('.ember-3d-nav-container').hasClass('nav-is-visible'), false, 'nav-is-visible class removed after clicking nav item');
    });
  });
});
