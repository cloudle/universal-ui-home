"use strict";

Object.defineProperty(exports, "__esModule", { value: true });exports.default = undefined;var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _nextReduxWrapper = require("next-redux-wrapper");var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);
var _reactNative = require("react-native");
var _router = require("next/dist/lib/router/index.js");var _router2 = _interopRequireDefault(_router);

var _index = require("../../utils/index");function _interopRequireDefault(obj) {
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
}var Navigation = function (_Component) {
  _inherits(Navigation, _Component);function Navigation() {
    _classCallCheck(this, Navigation);return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
  }_createClass(Navigation, [{ key: 'render', value: function render() {
      return _react2.default.createElement(_reactNative.View, { style: styles.container }, _react2.default.createElement(_reactNative.View, { style: [_index.iStyles.contentContainer, styles.contentContainer] }, this.renderLogo(), this.renderMenus()));
    } }, { key: 'renderLogo', value: function renderLogo() {
      return _react2.default.createElement(_reactNative.TouchableOpacity, {
        onPress: function onPress() {
          return _router2.default.push('/');
        } }, _react2.default.createElement(_reactNative.Text, { style: styles.text }, 'UNIVERSAL UI'));
    } }, { key: 'renderMenus', value: function renderMenus() {
      var _this2 = this;
      return _react2.default.createElement(_reactNative.View, { style: styles.menuContainer }, menus.map(function (menu, i) {
        var active = _this2.props.url && _this2.props.url.pathname === menu.link,
            activeWrapperStyle = active ? { backgroundColor: 'rgba(255, 255, 255, 0.1)' } : {},
            activeTextStyle = active ? { color: '#ffffff' } : {};

        return _react2.default.createElement(_reactNative.TouchableOpacity, {
          activeOpacity: 0.2, key: i,
          style: [styles.menuItemWrapper, activeWrapperStyle],
          onPress: function onPress() {
            return _router2.default.push(menu.link);
          } }, _react2.default.createElement(_reactNative.Text, { style: [styles.menuText, activeTextStyle] }, menu.title));
      }));
    } }]);return Navigation;
}(_react.Component);Navigation.propTypes = { url: require("prop-types").object };exports.default = Navigation;

var styles = _reactNative.StyleSheet.create({
  container: {
    backgroundColor: _index.colors.main,
    paddingTop: 8,
    paddingLeft: 10, paddingRight: 10 },

  contentContainer: {
    flexDirection: 'row', alignItems: 'center' },

  text: {
    color: '#ffffff' },

  menuContainer: {
    flexDirection: 'row',
    flex: 1 },

  menuItemWrapper: {
    padding: 12, paddingTop: 9, paddingBottom: 9,
    margin: 12, marginLeft: 8, marginRight: 8,
    borderRadius: 4 },

  menuText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 11,
    fontWeight: '500' } });

var menus = [{
  title: 'PLATFORMS',
  link: '/platforms',
  active: true }, {
  title: 'SHOWCASES',
  link: '/showcases' }, {
  title: 'DOCS',
  link: '/docs' }, {
  title: 'SUPPORT',
  link: '/support' }, {
  title: 'ECOSYSTEM',
  link: '/ecosystem' }];