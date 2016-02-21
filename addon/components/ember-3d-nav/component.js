import Ember from 'ember';
import $ from 'jquery';
import layout from './template';

export default Ember.Component.extend({
  layout,
  tagName: '',
  didInsertElement() {
    //toggle 3d navigation
    $('.cd-3d-nav-trigger').on('click', () => {
      this.toggle3dBlock(!$('.cd-header').hasClass('nav-is-visible'));
    });

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
  toggle3dBlock(addOrRemove) {
    if (typeof(addOrRemove) === 'undefined') addOrRemove = true;
    $('.cd-header').toggleClass('nav-is-visible', addOrRemove);
    $('.cd-3d-nav-container').toggleClass('nav-is-visible', addOrRemove);
    $('main').toggleClass('nav-is-visible', addOrRemove).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', () => {
      //fix marker position when opening the menu (after a window resize)
      addOrRemove && this.updateSelectedNav();
    });
  },
  //this function update the .cd-marker position
  updateSelectedNav(type) {
    const selectedItem = $('.cd-selected');
    const selectedItemPosition = selectedItem.index() + 1;
    const leftPosition = selectedItem.offset().left;
    const backgroundColor = selectedItem.data('color');
    const marker = $('.cd-marker');

    marker.removeClassPrefix('color').addClass('color-' + selectedItemPosition).css({
      'left': leftPosition
    });
    if (type == 'close') {
      marker.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', () => {
        this.toggle3dBlock(false);
      });
    }
  },
  actions: {
    onClickAction() {
      this.get('links').setEach('selected', false);
      Ember.run.scheduleOnce('afterRender', this, () =>{
        this.updateSelectedNav('close');
      });
    }
  }
});
