/* eslint-disable ember/no-observers, ember-suave/prefer-destructuring */
import Component from '@ember/component';
import { computed, get, observer, set } from '@ember/object';
import { equal } from '@ember/object/computed';
import { run } from '@ember/runloop';
import { inject as service } from '@ember/service';
import layout from './template';

export default Component.extend({
  navService: service('ember-3d-nav'),
  layout,
  classNameBindings: ['isSelected'],
  classNames: ['flexi-centered'],
  isHref: equal('link.type', 'href'),
  isLinkTo: equal('link.type', 'linkTo'),
  isSelected: computed('navService.selectedIndex', function() {
    return get(this, 'index') === get(this, 'navService.selectedIndex');
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
    if (!get(this, 'isSelected')) {
      set(this, 'navService.selectedIndex', get(this, 'index'));
      run.scheduleOnce('afterRender', this, () => {
        get(this, 'navService').updateSelectedNav('close');
      });
    }
  },

  updateSelected() {
    // If we are using linkTo, we need to check the currentPath and see if it is the same as the linkTo value
    if (get(this, 'link.type') === 'linkTo') {

      const currentPath = get(this, 'navService.currentPath');
      const linkTo = get(this, 'link.linkTo');
      const linkToEqualsCurrentPath = linkTo === currentPath;

      const shouldMatchParentRoute = Boolean(get(this, 'link.matchParentRoute'));
      const linkToEqualsParentPath = shouldMatchParentRoute &&
        currentPath.startsWith(linkTo);
      if (linkToEqualsCurrentPath || linkToEqualsParentPath) {
        set(this, 'navService.selectedIndex', get(this, 'index'));
      }
    } else if (get(this, 'link.type') === 'href') {
      // If the type is href, we want to look at the end of the url and match it
      const pathAndHash = window.location.pathname + window.location.hash;

      // Remove the first slash
      const href = pathAndHash.split(/\/(.+)?/)[1];

      const linkHref = get(this, 'link.href').indexOf('/') === 0 ? get(this, 'link.href').split(/\/(.+)?/)[1] : get(this, 'link.href');

      if (linkHref === href) {
        set(this, 'navService.selectedIndex', get(this, 'index'));
      }
    }
  }
});
