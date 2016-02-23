import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  classNameBindings: [':cd-3d-nav-trigger'],
  tagName: 'span',
  click() {
    this.sendAction('onClickAction');
  }
});
