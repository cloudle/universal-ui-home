'use strict';

Object.defineProperty(exports, "__esModule", { value: true });exports.imageRatio = exports.ScreenSize = undefined;exports.ScreenWidthPadding = ScreenWidthPadding;exports.GetRatioHeight = GetRatioHeight;exports.formatNumber = formatNumber;var _reactNative = require('react-native');var ScreenSize = exports.ScreenSize = _reactNative.Dimensions.get('window');var imageRatio = exports.imageRatio = 0.5625;function ScreenWidthPadding(padding, maxSize) {
  var paddedSize = ScreenSize.width - padding * 2;return paddedSize > maxSize ? maxSize : paddedSize;
}function GetRatioHeight(width) {
  return width * imageRatio;
}function formatNumber(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}