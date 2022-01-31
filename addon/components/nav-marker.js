/* eslint-disable ember/no-computed-properties-in-native-classes */
import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NavMarker extends Component {
  @service('ember-3d-nav') navService;

  @computed('args.multiColor', 'navService.selectedIndex', function () {
    let color = 'color-';

    if (this.args.multiColor) {
      color += this.navService.selectedIndex + 1;
    } else {
      color += 1;
    }
    return color;
  })
  colorNumber;
}
