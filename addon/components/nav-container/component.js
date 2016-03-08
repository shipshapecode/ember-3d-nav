import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  tagName: 'nav',
  classNameBindings: [':cd-3d-nav-container', 'navService.navIsVisible:nav-is-visible'],
  navService: Ember.inject.service('ember-3d-nav')
});
