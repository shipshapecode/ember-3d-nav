import Component from 'ember-component';
import computed from 'ember-computed';
import service from 'ember-service/inject';

export default Component.extend({
  navService: service('ember-3d-nav'),
  tagName: 'span',
  classNames: ['nav-marker'],
  classNameBindings: ['colorNumber'],
  colorNumber: computed('multiColor', 'navService.selectedIndex', function() {
    let color = 'color-';

    if (this.get('multiColor')) {
      color += (this.get('navService.selectedIndex') + 1);
    } else {
      color += 1;
    }
    return color;
  })
});
