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
    this.listen = this.listen.bind(this);
    this.notify = this.notify.bind(this);
    this.ignore = this.ignore.bind(this);
    this.getComponent = this.getComponent.bind(this);
    this.setComponent = this.setComponent.bind(this);
    this.reset = this.reset.bind(this);
  }

  listen(listener, updateCallback) {
    if (!containsListeners(this.listeners, listener)) {
      this.listeners.push({ listener, updateCallback });
    }
  }

  notify(state) {
    for (let i = 0; i < this.listeners.length; i++) {
      const currentListener = this.listeners[i];
      currentListener.updateCallback(state);
    }
  }

  ignore(listener) {
    for (let i = 0; i < this.listeners.length; i++) {
      const currentListener = this.listeners[i];
      if (currentListener.listener === listener) {
        this.listeners.splice(i, 1);
        i = this.listeners.length;
      }
    }
  }

  getComponent() {
    return this.currentComponent;
  }

  setComponent(component) {
    this.currentComponent = component;
  }

  reset() {
    this.currentComponent = undefined;
    this.listeners = [];
  }
}