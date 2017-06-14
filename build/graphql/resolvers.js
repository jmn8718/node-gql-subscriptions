'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlSubscriptions = require('graphql-subscriptions');

var _pubsub = require('../config/pubsub');

var _controllers = require('../modules/devices/controllers');

var deviceControllers = _interopRequireWildcard(_controllers);

var _constants = require('../modules/devices/constants');

var deviceConstants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var resolvers = {
  Query: {
    device: function device(root, args) {
      return deviceControllers.getDevice(args.id);
    },
    devices: function devices(root, args) {
      return deviceControllers.getDevices(args);
    }
  },
  Mutation: {
    createDevice: function createDevice(root, args) {
      return deviceControllers.createDevice(args);
    },
    updateDeviceLocation: function updateDeviceLocation(root, args) {
      return deviceControllers.updatedDevice(args);
    }
  },
  Subscription: {
    watchDevice: {
      resolve: function resolve(payload) {
        return payload;
      },
      subscribe: (0, _graphqlSubscriptions.withFilter)(function () {
        return _pubsub.pubsub.asyncIterator(deviceConstants.UPDATE_DEVICE);
      }, function (payload, args) {
        return payload._id.toString() === args.id;
      })
    },
    watchDevices: {
      resolve: function resolve(payload) {
        return payload;
      },
      subscribe: function subscribe() {
        return _pubsub.pubsub.asyncIterator([deviceConstants.UPDATE_DEVICE, deviceConstants.CREATE_DEVICE]);
      }
    }
  },
  DeviceSubscription: {
    currentLocation: function currentLocation(device) {
      return device.location;
    },
    id: function id(device) {
      return device._id;
    }
  },
  Device: {
    id: function id(device) {
      return device._id;
    }
  }
};

exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map