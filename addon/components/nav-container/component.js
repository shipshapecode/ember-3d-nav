import Ember from 'ember';
import layout from './template';
const {Component, inject} = Ember;

export default Component.extend({
  layout,
  tagName: 'nav',
  classNameBindings: [':ember-3d-nav-container', 'navService.navIsVisible:nav-is-visible'],
  navService: inject.service('ember-3d-nav')
});
