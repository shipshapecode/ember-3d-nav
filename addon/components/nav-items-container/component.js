import Ember from 'ember';
import $ from 'jquery';
import layout from './template';

export default Ember.Component.extend({
  layout,
  tagName: 'grid',
  classNameBindings: [''],
  navService: Ember.inject.service('ember-3d-nav'),
  didInsertElement() {
    $(window).on('resize', () => {
      window.requestAnimationFrame(this.get('navService').updateSelectedNav);
    });
  }
});
