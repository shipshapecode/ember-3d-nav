import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', {
    path: '/',
  });
  this.route('technologies');
  this.route('team');
  this.route('portfolio');
  this.route('contact');
});
