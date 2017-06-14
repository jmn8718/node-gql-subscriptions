'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeviceSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Required name']
  },
  location: {
    lat: {
      type: Number,
      required: true,
      min: -85,
      max: 85
    },
    lng: {
      type: Number,
      required: true,
      min: -180,
      max: 180
    }
  }
}, {
  timestamps: true
});

exports.default = _mongoose2.default.model('Device', DeviceSchema);
//# sourceMappingURL=model.js.map