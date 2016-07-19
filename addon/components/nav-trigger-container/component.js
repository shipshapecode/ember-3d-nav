import Ember from 'ember';
import $ from 'jquery';
import layout from './template';
import RespondsToScroll from 'ember-responds-to/mixins/responds-to-scroll';
const {Component, inject, on} = Ember;

export default Component.extend(RespondsToScroll, {
  layout,
  tagName: 'header',
  classNameBindings: [':header', 'navService.navIsVisible:nav-is-visible', 'fixed:is-fixed', 'fixedAndScrolled:is-fixed-and-scrolled'],
  navService: inject.service('ember-3d-nav'),
  fixedAndScrolled: false,
  onScroll: on('scroll', function() {
    if (this.get('fixed')) {
      const scrollPosition = $(window).scrollTop();
      if (scrollPosition > 0) {
        this.set('fixedAndScrolled', true);
      }
      else if (scrollPosition === 0) {
        this.set('fixedAndScrolled', false);
      }
    }
  }),
  actions: {
    toggleMenu() {
      this.toggleProperty('navService.navIsVisible');
      this.get('navService').toggle3dBlock();
    }
  }
});
