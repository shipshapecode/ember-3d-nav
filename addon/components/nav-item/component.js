import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  tagName: 'li',
  classNameBindings: ['isSelected'],
  href: '',
  isSelected: Ember.computed('selectedIndex', function () {
    return this.get('index') === this.get('selectedIndex');
  }),
  text: '',
  click() {
    if (!this.get('isSelected')) {
      this.sendAction('onClickAction', this.get('index'));
    }
  }
});
