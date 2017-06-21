'use strict';

Object.defineProperty(exports, "__esModule", { value: true });exports.iStyles = exports.baseStyles = undefined;var _reactNative = require('react-native');
var _colors = require('./colors');
var _configs = require('./configs');

var baseStyles = exports.baseStyles = {
  text: {
    backgroundColor: 'transparent',
    color: _colors.colors.text,
    paddingLeft: 10 } };

var iStyles = exports.iStyles = _reactNative.StyleSheet.create({
  contentContainer: {
    width: '100%', maxWidth: _configs.configs.maxContentWidth,
    margin: 'auto' } });