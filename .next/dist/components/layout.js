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
var _reactRedux = require("react-redux");
var _router = require("next/dist/lib/router/index.js");var _router2 = _interopRequireDefault(_router);

var _store = require("../store");var _store2 = _interopRequireDefault(_store);
var _navigation = require("./navigation");var _navigation2 = _interopRequireDefault(_navigation);
var _progressBar = require("./progressBar");var _progressBar2 = _interopRequireDefault(_progressBar);
var _app = require("../store/action/app");var appActions = _interopRequireWildcard(_app);
var _utils = require("../utils");function _interopRequireWildcard(obj) {
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
}var babelPluginFlowReactPropTypes_proptype_Style = require("../typeDefinition").babelPluginFlowReactPropTypes_proptype_Style || require("prop-types").any;var AppLayout = (_dec = (0, _reactRedux.connect)(function (_ref) {
  var app = _ref.app;return { routeLoaded: app.routeLoaded };
}), _dec(_class = function (_Component) {
  _inherits(AppLayout, _Component);function AppLayout() {
    _classCallCheck(this, AppLayout);return _possibleConstructorReturn(this, (AppLayout.__proto__ || Object.getPrototypeOf(AppLayout)).apply(this, arguments));
  }_createClass(AppLayout, [{ key: 'componentWillMount', value: function componentWillMount() {
      var _this2 = this;
      _router2.default.onRouteChangeStart = function (url) {
        _this2.props.dispatch(appActions.updateLoadingProgress(0));
      };

      _router2.default.onRouteChangeComplete = function () {
        setTimeout(function () {
          return _this2.props.dispatch(appActions.updateLoadingProgress(1));
        }, 200);
      };

      _router2.default.onRouteChangeError = function () {
        setTimeout(function () {
          return _this2.props.dispatch(appActions.updateLoadingProgress(1));
        }, 200);
      };
    } }, { key: 'render', value: function render() {
      return _react2.default.createElement(_reactNative.View, { style: styles.container }, _react2.default.createElement(_navigation2.default, { url: this.props.url }), _react2.default.createElement(_reactNative.View, { style: [styles.contentContainer, this.props.style] }, this.props.children), _react2.default.createElement(_progressBar2.default, { backgroundColor: '#ffffff' }));
    } }]);return AppLayout;
}(_react.Component)) || _class);AppLayout.propTypes = { url: require("prop-types").object, style: babelPluginFlowReactPropTypes_proptype_Style };exports.default = AppLayout;

var styles = _reactNative.StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0 },

  contentContainer: {
    flex: 1 } });