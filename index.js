module.exports = function(element) {
  var handlers = this;
  this.element = element;

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
