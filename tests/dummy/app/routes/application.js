import Ember from 'ember';

export default Ember.Route.extend({
  links: Ember.A([
    {
      href: '#0',
      selected: true,
      text: 'Dashboard'
    },
    {
      href: '#0',
      selected: false,
      text: 'Projects'
    },
    {
      href: '#0',
      selected: false,
      text: 'Images'
    },
    {
      href: '#0',
      selected: false,
      text: 'Settings'
    },
    {
      href: '#0',
      selected: false,
      text: 'New'
    }
  ]),
  setupController(controller){
    controller.set('links', this.get('links'));
  }
});
