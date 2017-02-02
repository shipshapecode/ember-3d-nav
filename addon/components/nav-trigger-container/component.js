/* eslint-disable ship-shape/no-on-calls-in-components */
import Ember from 'ember';
import layout from './template';
import RespondsToScroll from 'ember-responds-to/mixins/responds-to-scroll';
const { $, Component, inject, on, run } = Ember;

export default Component.extend(RespondsToScroll, {
  navService: inject.service('ember-3d-nav'),
  layout,
  tagName: 'header',
  classNameBindings: [':nav-trigger-container', 'navService.navIsVisible:nav-is-visible', 'isFixed', 'isFixedAndScrolled'],
  isFixedAndScrolled: false,
  useHeadroom: false,
  onScroll: on('scroll', function() {
    if (this.get('isFixed')) {
      const scrollPosition = $(window).scrollTop();

      if (scrollPosition > 0) {
        this.set('isFixedAndScrolled', true);
      } else if (scrollPosition === 0) {
        this.set('isFixedAndScrolled', false);
      }
    }
  }),
  didInsertElement() {
    this._super();
    if (this.get('useHeadroom')) {
      run.scheduleOnce('afterRender', this, function() {
        const headroomOpts = {
          offset: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
          onUnpin: () => {
            if (this.get('navService.navIsVisible')) {
              this.send('toggleMenu');
            }
          }
        };

        const headroom = new Headroom(this.element, headroomOpts);
        headroom.init();
      });
    }
  },
  actions: {
    toggleMenu() {
      this.toggleProperty('navService.navIsVisible');
      this.get('navService').toggle3dBlock();
    }
  }
});
