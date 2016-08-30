/* eslint-disable ember-suave/prefer-destructuring */
import Ember from 'ember';
import layout from './template';
const { Component, computed, inject, observer, run } = Ember;

export default Component.extend({
  layout,
  tagName: 'centered',
  classNameBindings: ['isSelected'],
  navService: inject.service('ember-3d-nav'),
  isSelected: computed('navService.selectedIndex', function() {
    return this.get('index') === this.get('navService.selectedIndex');
  }),
  didInsertElement() {
    run.later(this, function() {
      this.updateSelected();
    });
  },
  click() {
    if (!this.get('isSelected')) {
      // this.updateSelected();
      this.sendAction('onClickAction', this.get('index'));
      this.set('navService.selectedIndex', this.get('index'));
      run.scheduleOnce('afterRender', this, () => {
        this.get('navService').updateSelectedNav('close');
      });
    }
  },
  updateOnPathChange: observer('navService.currentPath', function() {
    run.later(this, function() {
      this.updateSelected();
    });
  }),
  updateSelected() {
    // If we are using linkTo, we need to check the currentPath and see if it is the same as the linkTo value
    if (this.get('link.type') === 'linkTo') {
      if (this.get('link.linkTo') === this.get('navService.currentPath')) {
        this.set('navService.selectedIndex', this.get('index'));
      }
    } else if (this.get('link.type') === 'href') {
      // If the type is href, we want to look at the end of the url and match it
      let pathAndHash = window.location.pathname + window.location.hash;

      // Remove the first slash
      let href = pathAndHash.split(/\/(.+)?/)[1];

      let linkHref = this.get('link.href').indexOf('/') === 0 ? this.get('link.href').split(/\/(.+)?/)[1] : this.get('link.href');

      if (linkHref === href) {
        this.set('navService.selectedIndex', this.get('index'));
      }
    }
  }
});
