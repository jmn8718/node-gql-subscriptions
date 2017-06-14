'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var location = _joi2.default.object({
  lat: _joi2.default.number().min(-85).max(85).required(),
  lng: _joi2.default.number().min(-180).max(180).required()
});

exports.default = {
  createDevice: {
    body: {
      name: _joi2.default.string().required(),
      location: location
    }
  },
  updateDeviceLocation: {
    params: {
      id: _joi2.default.required()
    },
    body: {
      location: location
    }
  }
};
//# sourceMappingURL=validations.js.map