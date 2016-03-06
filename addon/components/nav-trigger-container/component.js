import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  tagName: 'header',
  classNameBindings: [':cd-header', 'navIsVisible:nav-is-visible', 'fixed:fixed'],
  actions: {
    toggleMenu(){
      this.sendAction('toggleMenu');
    }
  }
});
