"use strict";

Object.defineProperty(exports, "__esModule", { value: true });exports.default = undefined;var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();var _dec, _class, _class2, _temp2;var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _reactNative = require("react-native");
var _reactRedux = require("react-redux");

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
}var ProgressBar = (_dec = (0, _reactRedux.connect)(function (_ref) {
  var app = _ref.app;return { counter: app.counter, progress: app.loadingProgress, done: app.routeLoaded };
}), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(ProgressBar, _Component);function ProgressBar() {
    var _ref2;var _temp, _this, _ret;_classCallCheck(this, ProgressBar);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call.apply(_ref2, [this].concat(args))), _this), _this.optimisticTick = function () {
      var currentProgress = _this.props.progress;
      var nextProgress = currentProgress;

      if (currentProgress >= 0 && currentProgress < 0.2) {
        nextProgress += 0.01;
      } else if (currentProgress >= 0.2 && currentProgress < 0.5) {
        nextProgress += 0.004;
      } else if (currentProgress >= 0.5 && currentProgress < 0.8) {
        nextProgress += 0.002;
      } else if (currentProgress >= 0.8 && currentProgress < 0.99) {
        nextProgress += 0.0005;
      } else {
        _this.interval && clearInterval(_this.interval);
      }

      _this.props.dispatch(appActions.updateLoadingProgress(nextProgress));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }_createClass(ProgressBar, [{ key: 'componentDidMount', value: function componentDidMount() {
      this.interval = setInterval(this.optimisticTick, 20);
    } }, { key: 'componentWillUnmount', value: function componentWillUnmount() {
      this.interval = clearInterval(this.interval);
    } }, { key: 'componentWillReceiveProps', value: function componentWillReceiveProps(nextProps) {
      if (nextProps.progress < 1) {
        this.interval && clearInterval(this.interval);this.interval = setInterval(this.optimisticTick, 20);
      }
    } }, { key: 'render', value: function render() {
      var classes = this.props.progress >= 1 ? 'progress-bar done' : 'progress-bar',
          progressStyle = { width: this.props.progress * 100 + '%', backgroundColor: this.props.backgroundColor, shadowColor: this.props.shadowColor };return _react2.default.createElement(_reactNative.View, { className: classes, style: [styles.container, progressStyle] });
    } }]);return ProgressBar;
}(_react.Component), _class2.defaultProps = { initialProgress: 0, backgroundColor: '#249ade', shadowColor: '#ffffff' }, _temp2)) || _class);ProgressBar.propTypes = { initialProgress: require("prop-types").number, backgroundColor: require("prop-types").string, shadowColor: require("prop-types").string, progress: require("prop-types").number };exports.default = ProgressBar;

var styles = _reactNative.StyleSheet.create({
  container: {
    position: 'absolute', top: 0, left: 0,
    height: 2, width: '0%',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4 } });