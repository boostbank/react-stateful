'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = connect;

var _GlobalStateConnector = require('./GlobalStateConnector');

function connect(component, updateCallback) {
    if (component !== undefined) (0, _GlobalStateConnector.listen)(component, updateCallback);
    return (0, _GlobalStateConnector.getComponent)().state;
}