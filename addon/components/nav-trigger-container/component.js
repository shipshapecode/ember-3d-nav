import Ember from 'ember';
import $ from 'jquery';
import layout from './template';
import RespondsToScroll from 'ember-responds-to/mixins/responds-to-scroll';
const { Component, inject, on, run } = Ember;

export default Component.extend(RespondsToScroll, {
  layout,
  tagName: 'header',
  classNameBindings: [':nav-trigger-container', 'navService.navIsVisible:nav-is-visible', 'isFixed', 'isFixedAndScrolled'],
  navService: inject.service('ember-3d-nav'),
  isFixedAndScrolled: false,
  useHeadroom: false,
  onScroll: on('scroll', function() {
    if (this.get('isFixed')) {
      let scrollPosition = $(window).scrollTop();

      if (scrollPosition > 0) {
        this.set('isFixedAndScrolled', true);
      } else if (scrollPosition === 0) {
        this.set('isFixedAndScrolled', false);
      }
    }
  }),
  setupHeadroom: on('didInsertElement', function() {
    if (this.get('useHeadroom')) {
      run.scheduleOnce('afterRender', this, function() {
        let headroom  = new Headroom(this.element);
        headroom.init();
      });
    }
  }),
  actions: {
    toggleMenu() {
      this.toggleProperty('navService.navIsVisible');
      this.get('navService').toggle3dBlock();
    }
  }
});
