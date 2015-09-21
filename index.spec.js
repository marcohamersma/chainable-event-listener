// Since we're running the tests in a node environment,
// we keep state about what events are supposedly added.
// we're assuming that addEventListeners do their job properly

var eventChain = require('./index');

function fakeFunction() { }
function Stub() {
  var events = {};
  return {
    events: events,
    addEventListener: function(name, cb) { events[name] = cb;  },
    removeEventListener: function(name) { delete events[name];  },
  };
}

describe('adding and removing listeners', function() {
  var stub = Stub();
  var el = eventChain(stub);

  it('should add an event listener', function() {
    el.on('mouseup', fakeFunction);
    expect(stub.events.mouseup).toEqual(fakeFunction);
  });

  it('should remove an event listener', function() {
    el.off('mouseup', fakeFunction);
    expect(stub.events.mouseup).toBeUndefined();
  });
});

describe('chaining:', function() {
  var el = eventChain(Stub());

  it('should return an on and off function', function() {
    expect(el.on).toBeTruthy();
    expect(el.off).toBeTruthy();
  });

  it('After adding a handler, should return on and off function again', function() {
    expect(el.on('click').on).toBeTruthy();
    expect(el.off('click').off).toBeTruthy();
  });
});

describe('supplying multiple listeners', function() {
  var stub = Stub();
  var el = eventChain(stub);
  el.on('mouseup mousedown keyup', fakeFunction);

  it('should add multiple listeners', function() {
    expect(stub.events.mouseup).toEqual(fakeFunction);
    expect(stub.events.mousedown).toEqual(fakeFunction);
    expect(stub.events.keyup).toEqual(fakeFunction);
  });

  it('should remove multiple listeners', function() {
    el.off('keyup mousedown', fakeFunction);
    expect(stub.events.mouseup).toEqual(fakeFunction);
    expect(stub.events.mousedown).toBeUndefined();
    expect(stub.events.keyup).toBeUndefined();
  });
});