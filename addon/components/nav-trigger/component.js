import Ember from 'ember';
import layout from './template';
import styles from './styles';
const { Component } = Ember;

export default Component.extend({
  layout,
  styles,
  classNameBindings: [':nav-trigger'],
  tagName: 'span',
  click() {
    this.sendAction('onClickAction');
  }
});
