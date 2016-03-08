import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  tagName: 'centered',
  classNameBindings: ['isSelected'],
  navService: Ember.inject.service('ember-3d-nav'),
  href: '',
  isSelected: Ember.computed('navService.selectedIndex', function() {
    return this.get('index') === this.get('navService.selectedIndex');
  }),
  text: '',
  click() {
    if (!this.get('isSelected')) {
      this.sendAction('onClickAction', this.get('index'));
      this.set('navService.selectedIndex', this.get('index'));
      Ember.run.scheduleOnce('afterRender', this, () => {
        this.get('navService').updateSelectedNav('close');
      });
    }
  }
});
