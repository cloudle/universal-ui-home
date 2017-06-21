'use strict';

Object.defineProperty(exports, "__esModule", { value: true });exports.default = configureStore;var _redux = require('redux');var _reduxLogger = require('redux-logger');var _index = require('./reducers/index');var _index2 = _interopRequireDefault(_index);function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}var DEVTOOLS = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
    composeEnhancers = global[DEVTOOLS] || _redux.compose;function configureStore(initialState) {
  var enhancers = composeEnhancers();

  return initialState ? (0, _redux.createStore)(_index2.default, initialState, enhancers) : (0, _redux.createStore)(_index2.default, enhancers);
}