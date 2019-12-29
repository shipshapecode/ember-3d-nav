import Component from '@ember/component';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import { layout, tagName } from '@ember-decorators/component';
import template from '../templates/components/nav-items-container';

@tagName('')
@layout(template)
export default class NavItemsContainer extends Component {
  @service('ember-3d-nav') navService;

  init() {
    super.init(...arguments);

    window.addEventListener('resize', () => {
      window.requestAnimationFrame(get(this, 'navService').updateSelectedNav);
    });
  }
}
