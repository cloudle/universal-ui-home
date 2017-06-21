"use strict";

Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();var _class, _temp2;var _react = require("react");var _react2 = _interopRequireDefault(_react);
var _reactNative = require("react-native");
var _simpleMarkdown = require("simple-markdown");var _simpleMarkdown2 = _interopRequireDefault(_simpleMarkdown);
var _lodash = require("lodash");var _lodash2 = _interopRequireDefault(_lodash);
var _rules = require("./rules");var _rules2 = _interopRequireDefault(_rules);
var _styles = require("./styles");var _styles2 = _interopRequireDefault(_styles);function _interopRequireDefault(obj) {
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
}var Markdown = (_temp2 = _class = function (_Component) {
  _inherits(Markdown, _Component);function Markdown() {
    var _ref;var _temp, _this, _ret;_classCallCheck(this, Markdown);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Markdown.__proto__ || Object.getPrototypeOf(Markdown)).call.apply(_ref, [this].concat(args))), _this), _this.renderContent = function (children) {
      var mergedStyles = _extends(_styles2.default, _this.props.styles);

      var rules = _this.postProcessRules(_lodash2.default.merge({}, _simpleMarkdown2.default.defaultRules, (0, _rules2.default)(mergedStyles), _this.props.rules));
      var child = Array.isArray(_this.props.children) ? _this.props.children.join('') : _this.props.children;
      var blockSource = child + '\n\n';
      var tree = _simpleMarkdown2.default.parserFor(rules)(blockSource, { inline: false });
      return _simpleMarkdown2.default.reactFor(_simpleMarkdown2.default.ruleOutput(rules, 'react'))(tree);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }_createClass(Markdown, [{ key: 'postProcessRules', value: function postProcessRules(preRules) {
      var defaultRules = ['paragraph', 'text'];if (this.props.whitelist.length) {
        return _lodash2.default.pick(preRules, _lodash2.default.concat(this.props.whitelist, defaultRules));
      } else if (this.props.blacklist.length) {
        return _lodash2.default.omit(preRules, _lodash2.default.pullAll(this.props.blacklist, defaultRules));
      } else {
        return preRules;
      }
    } }, { key: 'shouldComponentUpdate', value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props.children === nextProps.children && this.props.styles === nextProps.styles) {
        return false;
      }
      return true;
    } }, { key: 'render', value: function render() {
      return _react2.default.createElement(_reactNative.View, { style: [_styles2.default.view, this.props.styles.view] }, this.renderContent(this.props.children));
    } }]);return Markdown;
}(_react.Component), _class.defaultProps = { styles: _styles2.default, children: '', rules: {}, whitelist: [], blacklist: [] }, _temp2);Markdown.propTypes = { styles: require("prop-types").any.isRequired, children: require("prop-types").string, rules: require("prop-types").object.isRequired, whitelist: require("prop-types").arrayOf(require("prop-types").any).isRequired, blacklist: require("prop-types").arrayOf(require("prop-types").any).isRequired };exports.default = Markdown;