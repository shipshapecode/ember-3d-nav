import {test} from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';

moduleForAcceptance('Nav menu open/close/select behavior');

test("clicking menu button opens nav", function (assert) {
  assert.expect(2);

  visit('/');
  andThen(function () {
    assert.equal(find('.cd-3d-nav-container').hasClass('nav-is-visible'), false, "nav-is-visible class not applied initially");
  });
  click('.nav-trigger');
  andThen(function () {
    assert.equal(find('.cd-3d-nav-container').hasClass('nav-is-visible'), true, "nav-is-visible class applied after clicking menu button");
  });
});
