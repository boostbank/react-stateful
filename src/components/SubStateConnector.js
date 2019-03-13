var {
  hasSubStore,
  subscribeTo,
  unsubscribeFrom
} = require("@boostbank/stateful/lib/substore");

let instance = undefined;

const getInstance = () => {
  if (instance === undefined) {
    instance = new SubStateConnector();
  }
  return instance;
};

/**
 * @module SubStateConnector
 */
class SubStateConnector {
  constructor() {
    this.currentComponent = undefined;
    this.listeners = {};
    this.listenTo = this.listenTo.bind(this);
    this.ignore = this.ignore.bind(this);
  }

  listenTo(component, uid, connector) {
    if (hasSubStore(uid)) {
      if (this.listeners.hasOwnProperty(uid)) {
        this.listeners[uid].push({ component, uid, connector });
      } else {
        this.listeners[uid] = [{ component, uid, connector }];
      }
      subscribeTo(uid, connector);
    }
  }

  ignore(component, uid) {
    if (hasSubStore(uid)) {
      if (this.listeners.hasOwnProperty(uid)) {
        for (let i = 0; i < this.listeners[uid].length; i++) {
          const listener = this.listeners[uid][i];
          if (listener.component === component && uid === listener.uid) {
            unsubscribeFrom(uid, this.listeners[uid].connector);
            this.listeners[uid].splice(i, 1);
            i--;
          }
        }
      }
    }
  }
}

var initializer = getInstance();

module.exports = initializer;
