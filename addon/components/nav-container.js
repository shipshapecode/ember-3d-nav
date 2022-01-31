import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class NavContainer extends Component {
  @service('ember-3d-nav') navService;
}
