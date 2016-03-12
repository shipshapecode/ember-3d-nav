import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  tagName: 'centered',
  classNameBindings: ['isSelected'],
  navService: Ember.inject.service('ember-3d-nav'),
  didInsertElement(){
    Ember.run.later(this, function() {
      //If we are using linkTo, we need to check the currentPath and see if it is the same as the linkTo value
      if (this.get('link.type') === 'linkTo') {
        if (this.get('link.linkTo') === this.get('navService.currentPath')) {
          this.set('navService.selectedIndex', this.get('index'));
        }
      }
      //If the type is href, we want to look at the end of the url and match it
      else if (this.get('link.type') === 'href') {
        const pathAndHash = window.location.pathname + window.location.hash;
        //Remove the first slash
        const href = pathAndHash.split(/\/(.+)?/)[1];
        const linkHref = this.get('link.href').indexOf('/') === 0 ? this.get('link.href').split(/\/(.+)?/)[1] : this.get('link.href');
        if (linkHref === href) {
          this.set('navService.selectedIndex', this.get('index'));
        }
      }
    });
  },
  isSelected: Ember.computed('navService.selectedIndex', function() {
    return this.get('index') === this.get('navService.selectedIndex');
  }),
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
