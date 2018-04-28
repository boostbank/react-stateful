"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _stateful = require("@boostbank/stateful");

var _stateful2 = _interopRequireDefault(_stateful);

var _GlobalStateConnector = require("./GlobalStateConnector");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GlobalState = function (_Component) {
  _inherits(GlobalState, _Component);

  function GlobalState(props) {
    _classCallCheck(this, GlobalState);

    var _this = _possibleConstructorReturn(this, (GlobalState.__proto__ || Object.getPrototypeOf(GlobalState)).call(this, props));

    _this.state = props.store;
    return _this;
  }

  _createClass(GlobalState, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      (0, _GlobalStateConnector.setComponent)(this);
      _stateful2.default.subscribe(function (state) {
        _this2.setState(state);
        (0, _GlobalStateConnector.notify)(_this2.state);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _GlobalStateConnector.reset)();
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return GlobalState;
}(_react.Component);

exports.default = GlobalState;