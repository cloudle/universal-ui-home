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
var _reactUniversalUi = require("react-universal-ui");
var _link = require("next/dist/lib/link.js");var _link2 = _interopRequireDefault(_link);

var _markdown = require("../components/markdown");var _markdown2 = _interopRequireDefault(_markdown);
var _layout = require("../components/layout");var _layout2 = _interopRequireDefault(_layout);
var _greeting = require("../components/greeting");var _greeting2 = _interopRequireDefault(_greeting);
var _utils = require("../utils");
var _store = require("../store");var _store2 = _interopRequireDefault(_store);
var _app = require("../store/action/app");var appActions = _interopRequireWildcard(_app);function _interopRequireWildcard(obj) {
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
}var IndexPage = (_dec = (0, _nextReduxWrapper2.default)(_store2.default, function (_ref) {
  var app = _ref.app;return { counter: app.counter };
}), _dec(_class = function (_Component) {
  _inherits(IndexPage, _Component);function IndexPage() {
    _classCallCheck(this, IndexPage);return _possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).apply(this, arguments));
  }_createClass(IndexPage, [{ key: 'render', value: function render() {
      return _react2.default.createElement(_layout2.default, null, _react2.default.createElement(_markdown2.default, {
        styles: markdownStyles,
        rules: {
          inlineCode: {
            react: function react(node, output, state) {
              console.log(node, output, state);
              return _react2.default.createElement(_reactNative.Text, {
                key: state.key,
                style: { backgroundColor: 'red', borderRadius: 3 } }, 'This is inlineCode!!');
            } } } }, '# React **Universal** UI ', '\n', '``` console.log(\'hello world\') ```'));
    } }]);return IndexPage;
}(_react.Component)) || _class);IndexPage.propTypes = { dispatch: require("prop-types").func, counter: require("prop-types").number };exports.default = IndexPage;

var markdownStyles = {
  heading1: {
    fontSize: 24 },

  heading2: {
    fontSize: 22 },

  link: {
    color: 'pink' },

  mailTo: {
    color: 'orange' },

  text: {
    color: '#555555' } };

var styles = _reactNative.StyleSheet.create({
  container: {
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
    justifyContent: 'center', alignItems: 'center' } });