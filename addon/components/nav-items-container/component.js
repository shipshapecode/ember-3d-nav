import Ember from 'ember';
import $ from 'jquery';
import layout from './template';

export default Ember.Component.extend({
  layout,
  tagName: 'grid',
  classNameBindings: [''],
  selectedIndex: 0,
  didInsertElement() {
    $(window).on('resize', () => {
      window.requestAnimationFrame(this.sendAction('updateSelectedNav'));
    });
  },
  actions: {
    navItemClicked(selectedIndex) {
      this.set('selectedIndex', selectedIndex);
      Ember.run.scheduleOnce('afterRender', this, () => {
        this.sendAction('updateSelectedNav', 'close');
      });
    }
  }
});
