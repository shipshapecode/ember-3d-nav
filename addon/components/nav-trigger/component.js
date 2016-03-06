import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  classNameBindings: [':nav-trigger'],
  tagName: 'span',
  click() {
    this.sendAction('onClickAction');
  }
});
