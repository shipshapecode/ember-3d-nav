import Ember from 'ember';
import $ from 'jquery';
import getOwner from 'ember-getowner-polyfill';
const {computed, Service} = Ember;

export default Service.extend({
  init(...args) {
    this._super(args);
    this.set('applicationController', getOwner(this).lookup('controller:application'));
  },
  currentPath: computed.alias('applicationController.currentPath'),
  navIsVisible: false,
  selectedIndex: 0,
  toggle3dBlock() {
    let addOrRemove = this.get('navIsVisible');

    $('.main').toggleClass('nav-is-visible', addOrRemove).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', () => {
      // fix marker position when opening the menu (after a window resize)
      if (addOrRemove) {
        this.updateSelectedNav();
      }
    });
  },
  /**
   * This function updates the .nav-marker position
   *
   * @param type Whether it is a close or not
   * @private
   */
  updateSelectedNav(type) {
    let selectedItem = $('.is-selected');

    let leftPosition = selectedItem.offset().left;

    let marker = $('.nav-marker');

    marker.css({
      'left': leftPosition
    });
    if (type === 'close') {
      marker.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', () => {
        this.set('navIsVisible', false);
        this.toggle3dBlock();
      });
    }
  }
});
