import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { tagName } from '@ember-decorators/component';

@tagName('')
export default class NavContainer extends Component {
  @service('ember-3d-nav') navService;
}
