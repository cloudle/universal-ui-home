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
var _document = require("next/dist/server/document.js");var _document2 = _interopRequireDefault(_document);
var _server = require("styled-jsx/server");var _server2 = _interopRequireDefault(_server);function _interopRequireDefault(obj) {
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
}var MyDocument = function (_Document) {
  _inherits(MyDocument, _Document);function MyDocument() {
    _classCallCheck(this, MyDocument);return _possibleConstructorReturn(this, (MyDocument.__proto__ || Object.getPrototypeOf(MyDocument)).apply(this, arguments));
  }_createClass(MyDocument, [{ key: 'componentDidMount', value: function componentDidMount() {} }, { key: 'render', value: function render() {
      return _react2.default.createElement('html', null, _react2.default.createElement(_document.Head, null, _react2.default.createElement('style', null, '\n\t\t\t\t\tbody { margin: 0 } /* custom! */\n\t\t\t\t\t.progress-bar {\n\t\t\t\t\t\topacity: 1;\n\t\t\t\t\t\ttransition: opacity 2000ms linear;\n\t\t\t\t\t}\n\t\t\t\t\t.progress-bar.done {\n\t\t\t\t\t\topacity: 0;\n\t\t\t\t\t}\n\t\t\t\t'), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' }), _react2.default.createElement('meta', { name: 'format-detection', content: 'telephone=no' }), _react2.default.createElement('meta', { name: 'msapplication-tap-highlight', content: 'no' })), _react2.default.createElement('body', null, _react2.default.createElement(_document.Main, null), _react2.default.createElement(_document.NextScript, null)));
    } }], [{ key: 'getInitialProps', value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;var _renderPage = renderPage(),
          html = _renderPage.html,
          head = _renderPage.head,
          errorHtml = _renderPage.errorHtml,
          chunks = _renderPage.chunks;var styles = (0, _server2.default)();return { html: html, head: head, errorHtml: errorHtml, chunks: chunks, styles: styles };
    } }]);return MyDocument;
}(_document2.default);exports.default = MyDocument;