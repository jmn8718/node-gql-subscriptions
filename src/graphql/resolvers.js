import { withFilter } from 'graphql-subscriptions';

import { pubsub } from '../config/pubsub';
import * as deviceControllers from '../modules/devices/controllers';
import * as deviceConstants from '../modules/devices/constants';

const resolvers = {
  Query: {
    device: (root, args) => deviceControllers.getDevice(args.id),
    devices: (root, args) => deviceControllers.getDevices(args),
  },
  Mutation: {
    createDevice: (root, args) => deviceControllers.createDevice(args),
    updateDeviceLocation: (root, args) => deviceControllers.updatedDevice(args),
  },
  Subscription: {
    watchDevice: {
      resolve: (payload) => payload,
      subscribe: withFilter(
        () => pubsub.asyncIterator(deviceConstants.UPDATE_DEVICE),
        (payload, args) => payload._id.toString() === args.id,
      ),
    },
    watchDevices: {
      resolve: (payload) => payload,
      subscribe: () => pubsub.asyncIterator([deviceConstants.UPDATE_DEVICE, deviceConstants.CREATE_DEVICE]),
    },
  },
  DeviceSubscription: {
    currentLocation: (device) => device.location,
    id: (device) => device._id,
  },
  Device: {
    id: (device) => device._id,
  }
};

export default resolvers;
