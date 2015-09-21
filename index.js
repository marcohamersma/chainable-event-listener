module.exports = function(element) {
  var handlers = {
    on: on,
    off: off
  };

  function on(listeners, useCapture, wantsUntrusted) {
    listeners.split(' ').forEach(function(listener) {
      element.addEventListener(listener, useCapture, wantsUntrusted);
    });
    return handlers;
  }

  function off(listeners, useCapture) {
    listeners.split(' ').forEach(function(listener) {
      element.removeEventListener(listener, useCapture);
    });
    return handlers;
  }

  return handlers;
};
