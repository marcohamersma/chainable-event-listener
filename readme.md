# chainable-event-listener
[![npm version](https://badge.fury.io/js/chainable-event-listener.svg)](http://badge.fury.io/js/chainable-event-listener)

Wrapper around `(add/remove)EventListener` that supports adding multiple events at the same time, and chaining calls. Similar to jQuery's syntax.

## Usage
For use in the browser, a setup with either [browserify](http://browserify.org/) or [webpack](http://webpack.github.io/) is required.

### Installation
```
$ npm install --save chainable-event-listener
```

### Using the helper

```js
var EventChain      = require('chainable-event-listener');
var $exampleElement = new EventChain(exampleElement);

$exampleElement.on('mouseup mousedown keyup', fakeFunction)
               .on('mousedown', anotherFunction);
```

**Note:** I chose to prefix the `$exampleElement` with a `$` symbol for this example to indicate that this is not a reference to `exampleElement`, but instead it's eventChain. Of course you can name it like you want, I just named it like this because this module tries to emulate the jQuery API anyway.
