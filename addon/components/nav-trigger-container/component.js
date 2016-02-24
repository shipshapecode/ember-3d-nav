import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  actions: {
    toggleMenu(){
      this.sendAction('toggleMenu');
    }
  }
});
