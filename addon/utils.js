function whichTransitionEvent() {
  let t;
  const el = document.createElement('fakeelement');

  const transitions = {
    transition: 'transitionend',
    OTransition: 'oTransitionEnd',
    MozTransition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
  };

  for (t in transitions) {
    if (el.style[t] !== undefined) {
      return transitions[t];
    }
  }
}

const getScrollTop = function () {
  return window.pageYOffset !== undefined
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
};

const oneTimeTransitionEvent = function (element, callback) {
  const transitionEvent = whichTransitionEvent();
  const customFunction = (e) => {
    e.target.removeEventListener(transitionEvent, customFunction);
    return callback(e);
  };

  element.addEventListener(transitionEvent, customFunction);
};

export { getScrollTop, oneTimeTransitionEvent };
