/* eslint-disable ember/no-observers */
import Component from '@ember/component';
import { computed, observer, set } from '@ember/object';
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
  isSelected: computed('index', 'navService.selectedIndex', function() {
    return this.index === this.navService.selectedIndex;
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
    if (!this.isSelected) {
      set(this, 'navService.selectedIndex', this.index);
      run.scheduleOnce('afterRender', this, this._updateSelectedNav);
    }
  },

  updateSelected() {
    // If we are using linkTo, we need to check the currentPath and see if it is the same as the linkTo value
    if (this.link.type === 'linkTo') {
      const { currentPath } = this.navService;
      const { linkTo } = this.link;
      const linkToEqualsCurrentPath = linkTo === currentPath;

      const shouldMatchParentRoute = Boolean(
        this.link.matchParentRoute
      );
      const linkToEqualsParentPath =
        shouldMatchParentRoute && currentPath.startsWith(linkTo);
      if (linkToEqualsCurrentPath || linkToEqualsParentPath) {
        set(this, 'navService.selectedIndex', this.index);
      }
    } else if (this.link.type === 'href') {
      // If the type is href, we want to look at the end of the url and match it
      const pathAndHash = window.location.pathname + window.location.hash;

      // Remove the first slash
      const href = pathAndHash.split(/\/(.+)?/)[1];

      const linkHref =
        this.link.href.indexOf('/') === 0
          ? this.link.href.split(/\/(.+)?/)[1]
          : this.link.href;

      if (linkHref === href) {
        set(this, 'navService.selectedIndex', this.index);
      }
    }
  },

  _updateSelectedNav() {
    this.navService.updateSelectedNav('close');
  }
});
