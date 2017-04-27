import $ from 'jquery';
import Component from 'ember-component';
import service from 'ember-service/inject';
import layout from './template';

export default Component.extend({
  navService: service('ember-3d-nav'),
  layout,
  tagName: 'grid',
  classNameBindings: [''],
  didInsertElement() {
    $(window).on('resize', () => {
      window.requestAnimationFrame(this.get('navService').updateSelectedNav);
    });
  }
});
