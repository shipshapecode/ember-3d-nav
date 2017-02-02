import Ember from 'ember';
const { Component, computed, inject } = Ember;

export default Component.extend({
  navService: inject.service('ember-3d-nav'),
  tagName: 'span',
  classNameBindings: [':nav-marker', 'colorNumber'],
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
