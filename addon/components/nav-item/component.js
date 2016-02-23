import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  tagName: 'li',
  classNameBindings: ['cdSelected'],
  href: '',
  cdSelected: false,
  text: '',
  click(){
    if (!this.get('cdSelected')) {
      this.sendAction('onClickAction');
      this.set('cdSelected', true);
    }
  }
});
