import { computed } from '@ember/object';
import { getOwner } from '@ember/application';
import { oneTimeTransitionEvent } from '../utils';
import Service from '@ember/service';

export default Service.extend({
  init(...args) {
    this._super(args);
    this.set('applicationController', getOwner(this).lookup('controller:application'));
  },
  currentPath: computed.alias('applicationController.currentPath'),
  navIsVisible: false,
  selectedIndex: 0,
  toggle3dBlock() {
    const addOrRemove = this.get('navIsVisible');
    const main = document.querySelectorAll('.main')[0];
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
    const selectedItem = document.querySelectorAll('.is-selected')[0];
    const leftPosition = selectedItem.getBoundingClientRect().left + document.body.scrollLeft;
    const marker = document.querySelectorAll('.nav-marker')[0];

    marker.style.left = `${leftPosition}px`;

    if (type === 'close') {
      oneTimeTransitionEvent(marker, () => {
        this.set('navIsVisible', false);
        this.toggle3dBlock();
      });
    }
  }
});
