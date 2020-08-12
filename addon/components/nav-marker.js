import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { layout, tagName } from '@ember-decorators/component';
import template from '../templates/components/nav-marker';

@tagName('')
@layout(template)
export default class NavMarker extends Component {
  @service('ember-3d-nav') navService;

  @computed('multiColor', 'navService.selectedIndex', function() {
    let color = 'color-';

    if (this.multiColor) {
      color += this.navService.selectedIndex + 1;
    } else {
      color += 1;
    }
    return color;
  })
  colorNumber;
}
