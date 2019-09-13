const { subscribe, unsubscribe } = require("@boostbank/stateful");

let instance = undefined;

const getInstance = () => {
  if (instance === undefined) {
    instance = new GlobalStateConnector();
  }
  return instance;
};

const containsListeners = (listeners, listener) => {
  let contains = false;
  for (let i = 0; i < listeners.length; i++) {
    const currentListener = listeners[i].listener;
    contains = currentListener === listener;
    if (contains) {
      i = listeners.length;
    }
  }
  return contains;
};

/**
 * @module GlobalStateConnector
 */
class GlobalStateConnector {
  constructor() {
    this.listeners = [];
    this.listen = this.listen.bind(this);
    this.ignore = this.ignore.bind(this);
    this.reset = this.reset.bind(this);
  }

  listen(listener, updateCallback) {
    if (!containsListeners(this.listeners, listener)) {
      this.listeners.push({ listener, updateCallback });
      subscribe(updateCallback);
    }
  }

  ignore(listener) {
    for (let i = 0; i < this.listeners.length; i++) {
      const currentListener = this.listeners[i];
      if (currentListener.listener === listener) {
        unsubscribe(listener.updateCallback);
        this.listeners.splice(i, 1);
        i = this.listeners.length;
      }
    }
  }

  reset() {
    this.listeners.forEach(listener => {
      unsubscribe(listener.updateCallback);
    });
    this.listeners = [];
  }
}

module.exports = getInstance();
