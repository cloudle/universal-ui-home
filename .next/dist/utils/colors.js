'use strict';

Object.defineProperty(exports, "__esModule", { value: true });exports.colors = exports.tinyColor = undefined;var _tinycolor = require('tinycolor2');var _tinycolor2 = _interopRequireDefault(_tinycolor);function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var tinyColor = exports.tinyColor = _tinycolor2.default;

var main = '#ef5c6e';

var lighterMain = tinyColor(main).lighten(15).toHexString();
var darkerMain = tinyColor(main).darken(8).toHexString();

var colors = exports.colors = {
  main: main,
  darkerMain: darkerMain,
  lighterMain: lighterMain,
  dark: '#1f2532',
  danger: '#ff8142',
  blue: '#2196F3',
  orange: '#FF9800',
  green: '#8daf7e',
  text: '#444444',
  red: '#ff0008',
  lightGray: '#dedede' };