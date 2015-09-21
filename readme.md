# event-listener-chain
Wrapper around (add/remove)EventListener that supports adding multiple events at the same time, and chaining calls. Similar to jQuery's syntax.

Still work in progress

## Usage
```js
var el = eventChain(element);

el.on('mouseup mousedown keyup', fakeFunction)
  .on('mousedown', anotherFunction);
```

