import Ember from 'ember';
import Application from '../../app';
import config from '../../config/environment';
const { assign, run } = Ember;

export default function startApp(attrs) {
  // use defaults, but you can override
  const attributes = assign({}, config.APP, attrs);

  return run(() => {
    const application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
    return application;
  });
}
