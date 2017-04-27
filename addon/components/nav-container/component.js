import Component from 'ember-component';
import service from 'ember-service/inject';
import layout from './template';

export default Component.extend({
  navService: service('ember-3d-nav'),
  layout,
  tagName: 'nav',
  classNameBindings: [':ember-3d-nav-container', 'navService.navIsVisible:nav-is-visible']
});
