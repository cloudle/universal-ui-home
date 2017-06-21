'use strict';

Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};var _reactUniversalUi = require('react-universal-ui');
var _actions = require('../actions');var Actions = _interopRequireWildcard(_actions);function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

var initialState = {
  counter: 0,
  routeLoaded: true,
  loadingProgress: 1 };exports.default = (0, _reactUniversalUi.appReducer)(function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;var action = arguments[1];
  switch (action.type) {
    case Actions.IncreaseCounter:
      return _extends({}, state, { counter: state.counter + action.volume });
    case Actions.ToggleRouteLoaded:
      return _extends({}, state, { routeLoaded: action.flag === undefined ? !state.routeLoaded : action.flag });
    case Actions.UpdateLoadingProgress:
      return _extends({}, state, { loadingProgress: action.progress });
    default:
      return state;}
});