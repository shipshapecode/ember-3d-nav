import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNameBindings: [':nav-marker', 'colorNumber', 'numberOfNavItems'],
  colorNumber: Ember.computed('multiColor', 'selectedIndex', function() {
    let color = 'color-';
    if (this.get('multiColor')) {
      color += (this.get('selectedIndex') + 1);
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
