import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      links: Ember.A([
        {
          href: '#0',
          selected: true,
          text: 'About'
        },
        {
          href: '#0',
          selected: false,
          text: 'Technologies'
        },
        {
          href: '#0',
          selected: false,
          text: 'Team'
        },
        {
          href: '#0',
          selected: false,
          text: 'Portfolio'
        },
        {
          href: '#0',
          selected: false,
          text: 'Contact'
        }
      ])
    };
  }
});
