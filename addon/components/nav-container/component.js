import Ember from 'ember';
import layout from './template';
import styles from './styles';
const { Component, inject } = Ember;

export default Component.extend({
  layout,
  styles,
  tagName: 'nav',
  classNameBindings: [':ember-3d-nav-container', 'navService.navIsVisible:nav-is-visible'],
  navService: inject.service('ember-3d-nav')
});
