import Ember from 'ember';
import layout from './template';
const { Component, inject } = Ember;

export default Component.extend({
  navService: inject.service('ember-3d-nav'),
  layout,
  tagName: 'nav',
  classNameBindings: [':ember-3d-nav-container', 'navService.navIsVisible:nav-is-visible']
});
