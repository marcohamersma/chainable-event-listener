/* eslint no-console:0 */
function noop() { return; }

module.exports = function(element) {
  var handlers = this;
  this.element = element;
  if (!element || !element.addEventListener) {
    this.on = noop;
    this.off = noop;

    if (typeof console !== 'undefined') {
      console.warn('Expected DOM element passed to chainableEventListener, got', element);
    }

    return this;
  }


  this.on = function(listeners, useCapture, wantsUntrusted) {
    listeners.split(' ').forEach(function(listener) {
      element.addEventListener(listener, useCapture, wantsUntrusted);
    });
    return handlers;
  };

  this.off = function(listeners, useCapture) {
    listeners.split(' ').forEach(function(listener) {
      element.removeEventListener(listener, useCapture);
    });
    return handlers;
  };

  return this;
};
