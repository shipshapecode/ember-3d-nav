import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      links: Ember.A([
        //linkTo type to test with
        /*{
          linkTo: 'home',
          text: 'Home',
          type: 'linkTo'
        },
        {
          linkTo: 'technologies',
          text: 'Technologies',
          type: 'linkTo'
        },
        {
          linkTo: 'team',
          text: 'Team',
          type: 'linkTo'
        },
        {
          linkTo: 'portfolio',
          text: 'Portfolio',
          type: 'linkTo'
        },
        {
          linkTo: 'contact',
          text: 'Contact',
          type: 'linkTo'
        },*/
        //href type to test with
        {
          href: '#0',
          text: 'About',
          type: 'href'
        },
        {
          href: '#1',
          text: 'Technologies',
          type: 'href'
        },
        {
          href: 'team/#2',
          text: 'Team',
          type: 'href'
        },
        {
          href: '/portfolio/#3',
          text: 'Portfolio',
          type: 'href'
        },
        {
          href: '#4',
          text: 'Contact',
          type: 'href'
        }
      ])
    };
  }
});
