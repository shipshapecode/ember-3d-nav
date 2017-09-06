import Mixin from '@ember/object/mixin';
import { get } from '@ember/object';
import { run } from '@ember/runloop';

export default Mixin.create({
  debounce(handler) {
    return (...args) => {
      if (!this.isScheduled) {
        this.isScheduled = true;

        window.requestAnimationFrame(() => {
          this.isScheduled = false;

          if (get(this, 'isDestroyed')) {
            return;
          }

          run(this, handler, ...args);
        });
      }
    };
  }
});
