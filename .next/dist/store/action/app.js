"use strict";

Object.defineProperty(exports, "__esModule", { value: true });exports.increaseCounter = increaseCounter;exports.toggleRouteLoaded = toggleRouteLoaded;exports.updateLoadingProgress = updateLoadingProgress;var _actions = require("../actions");var Actions = _interopRequireWildcard(_actions);function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}function increaseCounter() {
  var volume = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;return { type: Actions.IncreaseCounter, volume: volume };
}function toggleRouteLoaded(flag) {
  return { type: Actions.ToggleRouteLoaded, flag: flag };
}function updateLoadingProgress(progress) {
  return { type: Actions.UpdateLoadingProgress, progress: progress };
}