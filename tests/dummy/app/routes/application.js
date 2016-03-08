import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      links: Ember.A([
        {
          href: '#0',
          text: 'About'
        },
        {
          href: '#0',
          text: 'Technologies'
        },
        {
          href: '#0',
          text: 'Team'
        },
        {
          href: '#0',
          text: 'Portfolio'
        },
        {
          href: '#0',
          text: 'Contact'
        }
      ])
    };
  }
});
