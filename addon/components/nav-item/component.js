/* eslint-disable ship-shape/no-observers, ship-shape/prefer-destructuring */
import Component from '@ember/component';
import { computed } from '@ember/object';
import { observer } from '@ember/object';
import { run } from '@ember/runloop';
import { inject as service } from '@ember/service';
import layout from './template';

export default Component.extend({
  navService: service('ember-3d-nav'),
  layout,
  tagName: 'centered',
  classNameBindings: ['isSelected'],
  isSelected: computed('navService.selectedIndex', function() {
    return this.get('index') === this.get('navService.selectedIndex');
  }),
  updateOnPathChange: observer('navService.currentPath', function() {
    run.later(this, function() {
      this.updateSelected();
    });
  }),
  didInsertElement() {
    run.later(this, function() {
      this.updateSelected();
    });
  },
  click() {
    if (!this.get('isSelected')) {
      this.set('navService.selectedIndex', this.get('index'));
      run.scheduleOnce('afterRender', this, () => {
        this.get('navService').updateSelectedNav('close');
      });
    }
  },

  updateSelected() {
    // If we are using linkTo, we need to check the currentPath and see if it is the same as the linkTo value
    if (this.get('link.type') === 'linkTo') {
      if (this.get('link.linkTo') === this.get('navService.currentPath')) {
        this.set('navService.selectedIndex', this.get('index'));
      }
    } else if (this.get('link.type') === 'href') {
      // If the type is href, we want to look at the end of the url and match it
      const pathAndHash = window.location.pathname + window.location.hash;

      // Remove the first slash
      const href = pathAndHash.split(/\/(.+)?/)[1];

      const linkHref = this.get('link.href').indexOf('/') === 0 ? this.get('link.href').split(/\/(.+)?/)[1] : this.get('link.href');

      if (linkHref === href) {
        this.set('navService.selectedIndex', this.get('index'));
      }
    }
  }
});
