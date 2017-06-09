import { withFilter } from 'graphql-subscriptions';

import { pubsub } from '../config/pubsub';
import * as devices from '../modules/devices';

const resolvers = {
  Query: {
    device: (root, args) => devices.getDevice(args.id),
    devices: () => devices.getDevices(),
    devicesByLocation: (root, args) => {
      const { location, distance } = args;
      console.log(location, distance);
      return devices.getDevices();
    },
    devicesByBox: (root, args) => {
      const { box } = args;
      console.log(box);
      return devices.getDevices();
    },
  },
  Mutation: {
    createDevice: (root, args) => devices.createDevice(args),
    updateDeviceLocation: (root, args) => devices.updatedDevice(args),
  },
  Subscription: {
    watchDevice: {
      resolve: (payload) => payload,
      subscribe: withFilter(() => pubsub.asyncIterator('updateDeviceLocation'), (payload, args) => payload.id === args.id),
    },
    watchDevices: {
      resolve: (payload) => payload,
      subscribe: () => pubsub.asyncIterator(['updateDeviceLocation', 'newDevice']),
    },
  },
};

export default resolvers;
