import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('technologies');
  this.route('team');
  this.route('portfolio');
  this.route('contact');
});

export default Router;
