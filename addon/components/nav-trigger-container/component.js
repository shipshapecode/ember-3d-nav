import Ember from 'ember';
import $ from 'jquery';
import layout from './template';
import RespondsToScroll from 'ember-responds-to/mixins/responds-to-scroll';

export default Ember.Component.extend(RespondsToScroll, {
  layout,
  tagName: 'header',
  classNameBindings: [':header', 'navService.navIsVisible:nav-is-visible', 'fixed:fixed', 'fixedAndScrolled'],
  navService: Ember.inject.service('ember-3d-nav'),
  fixedAndScrolled: false,
  onScroll: Ember.on('scroll', function() {
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
