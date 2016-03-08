import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNameBindings: [':nav-marker', 'colorNumber', 'numberOfNavItems'],
  navService: Ember.inject.service('ember-3d-nav'),
  colorNumber: Ember.computed('multiColor', 'navService.selectedIndex', function() {
    let color = 'color-';
    if (this.get('multiColor')) {
      color += (this.get('navService.selectedIndex') + 1);
    }
    else {
      color += 1;
    }
    return color;
  }),
  numberOfNavItems: Ember.computed('totalNavItems', function() {
    return 'nav-items-' + this.get('totalNavItems');
  })
});
