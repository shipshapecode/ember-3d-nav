import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  tagName: '',
  navIsVisible: false,
  actions: {
    toggle3dBlock() {
      let addOrRemove = this.get('navIsVisible');
      $('main').toggleClass('nav-is-visible', addOrRemove).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', () => {
        //fix marker position when opening the menu (after a window resize)
        addOrRemove && this.sendAction('updateSelectedNav');
      });
    },
    toggleMenu() {
      this.toggleProperty('navIsVisible');
      this.sendAction('toggle3dBlock');
    },
    /**
     * This function updates the .nav-marker position
     *
     * @param type Whether it is a close or not
     */
    updateSelectedNav(type) {
      const selectedItem = $('.is-selected');
      const leftPosition = selectedItem.offset().left;
      const marker = $('.nav-marker');

      marker.css({
        'left': leftPosition
      });
      if (type == 'close') {
        marker.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', () => {
          this.set('navIsVisible', false);
          this.sendAction('toggle3dBlock');
        });
      }
    }
  }
});
