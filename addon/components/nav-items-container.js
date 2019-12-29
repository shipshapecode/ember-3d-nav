import Component from '@ember/component';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import { tagName } from '@ember-decorators/component';

@tagName('')
export default class NavItemsContainer extends Component {
  @service('ember-3d-nav') navService;

  init() {
    super.init(...arguments);

    window.addEventListener('resize', () => {
      window.requestAnimationFrame(get(this, 'navService').updateSelectedNav);
    });
  }
}
