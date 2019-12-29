import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { layout, tagName } from '@ember-decorators/component';
import template from '../templates/components/nav-container';

@tagName('')
@layout(template)
export default class NavContainer extends Component {
  @service('ember-3d-nav') navService;
}
