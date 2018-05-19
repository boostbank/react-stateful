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
    this.currentComponent = undefined;
    this.listeners = [];
  }

  listen(listener, updateCallback) {
    if (!containsListeners(getInstance().listeners, listener)) {
      getInstance().listeners.push({ listener, updateCallback });
    }
  }

  notify(state) {
    for (let i = 0; i < getInstance().listeners.length; i++) {
      const currentListener = getInstance().listeners[i];
      currentListener.updateCallback(state);
    }
  }

  ignore(listener) {
    for (let i = 0; i < getInstance().listeners.length; i++) {
      const currentListener = getInstance().listeners[i];
      if (currentListener === listener) {
        getInstance().listeners.splice(i, 1);
        i = getInstance().listeners.length;
      }
    }
  }

  getComponent() {
    return getInstance().currentComponent;
  }

  setComponent(component) {
    getInstance().currentComponent = component;
  }

  reset() {
    getInstance().currentComponent = undefined;
    getInstance().listeners = [];
  }
}

var initializer = getInstance();

module.exports = initializer;
