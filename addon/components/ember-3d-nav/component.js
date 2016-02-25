import Ember from 'ember';
import $ from 'jquery';
import layout from './template';

export default Ember.Component.extend({
  layout,
  tagName: '',
  navIsVisible: false,
  didInsertElement() {
    $(window).on('resize', () => {
      window.requestAnimationFrame(this.updateSelectedNav);
    });

    $.fn.removeClassPrefix = function(prefix) {
      this.each((i, el) => {
        let classes = el.className.split(" ").filter(function(c) {
          return c.lastIndexOf(prefix, 0) !== 0;
        });
        el.className = $.trim(classes.join(" "));
      });
      return this;
    };
  },
  toggle3dBlock() {
    let addOrRemove = this.get('navIsVisible');
    $('main').toggleClass('nav-is-visible', addOrRemove).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', () => {
      //fix marker position when opening the menu (after a window resize)
      addOrRemove && this.updateSelectedNav();
    });
  },
  /**
   * This function updates the .cd-marker position
   *
   * @param type Whether it is a close or not
   */
  updateSelectedNav(type) {
    const selectedItem = $('.is-selected');
    const selectedItemPosition = selectedItem.index() + 1;
    const leftPosition = selectedItem.offset().left;
    const backgroundColor = selectedItem.data('color');
    const marker = $('.cd-marker');

    if (this.get('multiColor')) {
      marker.removeClassPrefix('color').addClass('color-' + selectedItemPosition);
    }
    marker.css({
      'left': leftPosition
    });
    if (type == 'close') {
      marker.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', () => {
        this.set('navIsVisible', false);
        this.toggle3dBlock();
      });
    }
  },
  actions: {
    navItemSelected() {
      Ember.run.scheduleOnce('afterRender', this, () => {
        this.updateSelectedNav('close');
      });
    },
    toggleMenu(){
      this.toggleProperty('navIsVisible');
      this.toggle3dBlock();
    }
  }
});
