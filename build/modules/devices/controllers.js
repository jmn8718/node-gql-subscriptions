'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDevices = exports.getDevice = exports.updatedDevice = exports.createDevice = undefined;

var _pubsub = require('../../config/pubsub');

var _constants = require('./constants');

var deviceConstants = _interopRequireWildcard(_constants);

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var createDevice = exports.createDevice = function createDevice(_ref) {
  var name = _ref.name,
      location = _ref.location;

  return _model2.default.create({
    name: name,
    location: location
  }).then(function (device) {
    _pubsub.pubsub.publish(deviceConstants.CREATE_DEVICE, Object.assign({
      type: deviceConstants.CREATE_DEVICE
    }, device.toObject()));
    return device;
  });
};

var updatedDevice = exports.updatedDevice = function updatedDevice(_ref2) {
  var id = _ref2.id,
      location = _ref2.location;

  var previousLocation = void 0;
  return _model2.default.findById(id).then(function (device) {
    previousLocation = {
      lat: device.location.lat,
      lng: device.location.lng
    };
    device.location = location;
    return device.save();
  }).then(function (device) {
    _pubsub.pubsub.publish(deviceConstants.UPDATE_DEVICE, Object.assign({
      previousLocation: previousLocation,
      type: deviceConstants.UPDATE_DEVICE
    }, device.toObject()));
    return device;
  });
};

var getDevice = exports.getDevice = function getDevice(id) {
  return _model2.default.findById(id);
};

var getDevices = exports.getDevices = function getDevices(_ref3) {
  var _ref3$limit = _ref3.limit,
      limit = _ref3$limit === undefined ? 0 : _ref3$limit,
      _ref3$skip = _ref3.skip,
      skip = _ref3$skip === undefined ? 0 : _ref3$skip;
  return _model2.default.find().sort({ updatedAt: -1 }).skip(skip).limit(limit);
};
//# sourceMappingURL=controllers.js.map