/* eslint-disable ember/no-on-calls-in-components */
import { set } from '@ember/object';
import Component from '@ember/component';
import { on } from '@ember/object/evented';
import { getScrollTop } from '../../utils';
import { inject as service } from '@ember/service';
import { run } from '@ember/runloop';
import Headroom from 'headroom';
import layout from './template';
import RespondsToScroll from '../../mixins/responds-to-scroll';
import { action } from '@ember/object';

export default Component.extend(RespondsToScroll, {
  navService: service('ember-3d-nav'),

  layout,
  tagName: 'header',
  classNames: ['nav-trigger-container'],
  classNameBindings: [
    'navService.navIsVisible:nav-is-visible',
    'isFixed',
    'isFixedAndScrolled'
  ],
  isFixedAndScrolled: false,
  headroomOffset: null,
  useHeadroom: false,
  onScroll: on('scroll', function() {
    if (this.isFixed) {
      const scrollPosition = getScrollTop();

      if (scrollPosition > 0) {
        set(this, 'isFixedAndScrolled', true);
      } else if (scrollPosition === 0) {
        set(this, 'isFixedAndScrolled', false);
      }
    }
  }),

  didInsertElement() {
    this._super();

    if (this.useHeadroom) {
      run.scheduleOnce('afterRender', this, this._setupHeadroom);
    }
  },

  @action
  toggleMenu() {
    this.toggleProperty('navService.navIsVisible');
    this.navService.toggle3dBlock();
  },

  _setupHeadroom() {
    const offset =
      this.headroomOffset ||
      Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const headroomOpts = {
      offset,
      onUnpin: () => {
        if (this.navService.navIsVisible) {
          this.send('toggleMenu');
        }
      }
    };

    const headroom = new Headroom(this.element, headroomOpts);
    headroom.init();
  }
});
