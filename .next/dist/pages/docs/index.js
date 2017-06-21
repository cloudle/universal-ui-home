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
var _reactLottie = require("react-lottie");var _reactLottie2 = _interopRequireDefault(_reactLottie);

var _layout = require("../../components/layout");var _layout2 = _interopRequireDefault(_layout);
var _sidebar = require("../../src/docs/sidebar");var _sidebar2 = _interopRequireDefault(_sidebar);
var _store = require("../../store");var _store2 = _interopRequireDefault(_store);
var _pinjump = require("../../src/lottie/pinjump.json");var animationData = _interopRequireWildcard(_pinjump);function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}function _interopRequireDefault(obj) {
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
}var DocsPage = (_dec = (0, _nextReduxWrapper2.default)(_store2.default, function (_ref) {
  var app = _ref.app;return { counter: app.counter };
}), _dec(_class = function (_Component) {
  _inherits(DocsPage, _Component);function DocsPage() {
    _classCallCheck(this, DocsPage);return _possibleConstructorReturn(this, (DocsPage.__proto__ || Object.getPrototypeOf(DocsPage)).apply(this, arguments));
  }_createClass(DocsPage, [{ key: 'render', value: function render() {
      return _react2.default.createElement(_layout2.default, {
        style: styles.layout,
        url: this.props.url }, _react2.default.createElement(_sidebar2.default, null), _react2.default.createElement(_reactNative.View, { style: styles.contentContainer }, _react2.default.createElement(_reactLottie2.default, {
        options: { animationData: animationData },
        height: 400, width: 400,
        isStopped: false,
        isPaused: false })));
    } }]);return DocsPage;
}(_react.Component)) || _class);exports.default = DocsPage;

var styles = _reactNative.StyleSheet.create({
  layout: {
    flexDirection: 'row' },

  contentContainer: {
    flex: 1 } });