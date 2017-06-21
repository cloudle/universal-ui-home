"use strict";

Object.defineProperty(exports, "__esModule", { value: true });exports.default = undefined;var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();var _dec, _class;var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _reactNative = require("react-native");
var _nextReduxWrapper = require("next-redux-wrapper");var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _layout = require("../../components/layout");var _layout2 = _interopRequireDefault(_layout);
var _store = require("../../store");var _store2 = _interopRequireDefault(_store);function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}var PlatformsPage = (_dec = (0, _nextReduxWrapper2.default)(_store2.default, function (_ref) {
  var app = _ref.app;return { counter: app.counter };
}), _dec(_class = function (_Component) {
  _inherits(PlatformsPage, _Component);function PlatformsPage() {
    _classCallCheck(this, PlatformsPage);return _possibleConstructorReturn(this, (PlatformsPage.__proto__ || Object.getPrototypeOf(PlatformsPage)).apply(this, arguments));
  }_createClass(PlatformsPage, [{ key: 'render', value: function render() {
      return _react2.default.createElement(_layout2.default, { url: this.props.url }, _react2.default.createElement(_reactNative.Text, null, 'PlatformsPage'));
    } }]);return PlatformsPage;
}(_react.Component)) || _class);exports.default = PlatformsPage;

var styles = _reactNative.StyleSheet.create({});