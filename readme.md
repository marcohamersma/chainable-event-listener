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
var eventChain   = require('chainable-event-listener');
var buttonEvents = eventChain(button);

buttonEvents.on('mouseup mousedown keyup', fakeFunction)
            .off('mousedown', fakeFunction);
```

### OR

```js
var buttonEvents = new EventChain(button);

buttonEvents.on('mouseup mousedown keyup', fakeFunction)
            .on('mousedown', anotherFunction);
```


## Alternative wordings

```js
var el = eventChain(button);

el.on('mouseup mousedown keyup', fakeFunction)
  .on('mousedown', anotherFunction);
```



```js
var _button = eventChain(button);

_button.on('mouseup mousedown keyup', fakeFunction)
       .on('mousedown', anotherFunction);
```


```js
var $button = eventChain(button);

$button.on('mouseup mousedown keyup', fakeFunction)
       .on('mousedown', anotherFunction);
```

