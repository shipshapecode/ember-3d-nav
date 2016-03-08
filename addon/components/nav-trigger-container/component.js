import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  tagName: 'header',
  navService: Ember.inject.service('ember-3d-nav'),
  classNameBindings: [':cd-header', 'navService.navIsVisible:nav-is-visible', 'fixed:fixed'],
  actions: {
    toggleMenu() {
      this.toggleProperty('navService.navIsVisible');
      this.get('navService').toggle3dBlock();
    }
  }
});
