import { computed, set } from '@ember/object';
import { oneTimeTransitionEvent } from '../utils';
import Service, { inject as service } from '@ember/service';

export default Service.extend({
  router: service(),
  currentPath: computed.alias('router.currentRouteName'),
  navIsVisible: false,
  selectedIndex: 0,
  toggle3dBlock() {
    const addOrRemove = this.navIsVisible;
    const main = document.querySelector('.main');
    main.classList.toggle('nav-is-visible', addOrRemove);
    oneTimeTransitionEvent(main, () => {
      // fix marker position when opening the menu (after a window resize)
      if (addOrRemove) {
        this.updateSelectedNav();
      }
    });
  },
  /**
   * This function updates the .nav-marker position
   *
   * @param type Whether it is a close or not
   * @private
   */
  updateSelectedNav(type) {
    const selectedItem = document.querySelector('.is-selected');
    const leftPosition =
      selectedItem.getBoundingClientRect().left + document.body.scrollLeft;
    const marker = document.querySelector('.nav-marker');

    marker.style.left = `${leftPosition}px`;

    if (type === 'close') {
      oneTimeTransitionEvent(marker, () => {
        set(this, 'navIsVisible', false);
        this.toggle3dBlock();
      });
    }
  },
});
