import Ember from 'ember';
import $ from 'jquery';
import layout from './template';
const { Component, inject } = Ember;

export default Component.extend({
  layout,
  tagName: 'grid',
  classNameBindings: [''],
  navService: inject.service('ember-3d-nav'),
  didInsertElement() {
    $(window).on('resize', () => {
      window.requestAnimationFrame(this.get('navService').updateSelectedNav);
    });
  }
});
