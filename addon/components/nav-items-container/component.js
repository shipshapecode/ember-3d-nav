import Component from '@ember/component';
import { inject as service } from '@ember/service';
import layout from './template';

export default Component.extend({
  navService: service('ember-3d-nav'),
  layout,
  tagName: 'grid',
  didInsertElement() {
    window.addEventListener('resize', () => {
      window.requestAnimationFrame(this.get('navService').updateSelectedNav);
    });
  }
});
