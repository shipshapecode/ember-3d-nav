import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class NavItemsContainer extends Component {
  @service('ember-3d-nav') navService;

  constructor() {
    super(...arguments);

    window.addEventListener('resize', () => {
      window.requestAnimationFrame(this.navService.updateSelectedNav);
    });
  }
}
