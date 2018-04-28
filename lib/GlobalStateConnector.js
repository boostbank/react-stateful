"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instance = undefined;

var getInstance = function getInstance() {
  if (instance === undefined) {
    instance = new GlobalStateConnector();
  }
  return instance;
};

var containsListeners = function containsListeners(listeners, listener) {
  var contains = false;
  for (var i = 0; i < listeners.length; i++) {
    var currentListener = listeners[i].listener;
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

var GlobalStateConnector = function () {
  function GlobalStateConnector() {
    _classCallCheck(this, GlobalStateConnector);

    this.currentComponent = undefined;
    this.listeners = [];
  }

  _createClass(GlobalStateConnector, [{
    key: "listen",
    value: function listen(listener, updateCallback) {
      if (!containsListeners(getInstance().listeners, listener)) {
        getInstance().listeners.push({ listener: listener, updateCallback: updateCallback });
        console.log(getInstance().listeners);
      }
    }
  }, {
    key: "notify",
    value: function notify(state) {
      for (var i = 0; i < getInstance().listeners.length; i++) {
        var currentListener = getInstance().listeners[i];
        currentListener.updateCallback(state);
      }
    }
  }, {
    key: "ignore",
    value: function ignore(listener) {
      for (var i = 0; i < getInstance().listeners.length; i++) {
        var currentListener = getInstance().listeners[i];
        if (currentListener === listener) {
          getInstance().listeners.splice(i, 1);
          i = getInstance().listeners.length;
        }
      }
    }
  }, {
    key: "getComponent",
    value: function getComponent() {
      return getInstance().currentComponent;
    }
  }, {
    key: "setComponent",
    value: function setComponent(component) {
      getInstance().currentComponent = component;
    }
  }, {
    key: "reset",
    value: function reset() {
      getInstance().currentComponent = undefined;
      getInstance().listeners = [];
    }
  }]);

  return GlobalStateConnector;
}();

var initializer = getInstance();

module.exports = initializer;