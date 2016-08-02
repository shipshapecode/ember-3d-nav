import Ember from 'ember';
import config from './config/environment';
const { Router: EmberRouter } = Ember;

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', {
    path: '/'
  });
  this.route('technologies');
  this.route('team');
  this.route('portfolio');
  this.route('contact');
});

export default Router;
