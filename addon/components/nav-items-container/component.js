import Ember from 'ember';
import $ from 'jquery';
import layout from './template';
const { Component, inject } = Ember;

export default Component.extend({
  navService: inject.service('ember-3d-nav'),
  layout,
  tagName: 'grid',
  classNameBindings: [''],
  didInsertElement() {
    $(window).on('resize', () => {
      window.requestAnimationFrame(this.get('navService').updateSelectedNav);
    });
  }
});
