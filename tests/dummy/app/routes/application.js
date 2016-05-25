import Ember from 'ember';
const {A, Route} = Ember;

export default Route.extend({
  model(){
    return {
      links: A([
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
          href: '#4',
          text: 'Contact',
          type: 'href'
        }
      ])
    };
  }
});
