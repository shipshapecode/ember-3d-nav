import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  tagName: 'grid',
  classNameBindings: [''],
  selectedIndex: 0,
  actions: {
    navItemClicked(selectedIndex) {
      this.set('selectedIndex', selectedIndex);
      this.sendAction('navItemSelected');
    }
  }
});
