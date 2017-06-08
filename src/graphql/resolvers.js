import faker from 'faker';
import { withFilter } from 'graphql-subscriptions';

import { pubsub } from '../config/pubsub';

const devices = [];

for (let i = 0; i < 30; i++) {
  devices.push({
    id: i,
    name: faker.random.uuid(),
    location: {
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
    }
  });
}

const resolvers = {
  Query: {
    device: (root, args) => devices[args.id],
    devices: () => devices,
    devicesByLocation: (root, args) => {
      const { location, distance } = args;
      console.log(location, distance);
      return devices;
    },
    devicesByBox: (root, args) => {
      const { box } = args;
      console.log(box);
      return devices;
    },
  },
  Mutation: {
    createDevice: (root, args) => {
      const newDevice = {
        id: devices.length,
        name: args.name,
        location: args.location,
      };
      devices.push(newDevice);
      console.log('n', newDevice)
      pubsub.publish('newDevice', newDevice);
      return newDevice;
    },
    updateDeviceLocation: (root, args) => {
      const updatedDevice = {
        id: args.id,
        name: devices[args.id].name,
        location: args.location,
      };
      devices.splice(args.id, 1, updatedDevice);
      pubsub.publish('updateDeviceLocation', updatedDevice);
      return updatedDevice;
    },
  },
  Subscription: {
    watchDevice: {
      resolve: (payload) => payload,
      subscribe: withFilter(() => pubsub.asyncIterator('updateDeviceLocation'), (payload, args) => {
        console.log('---------P', payload)
        console.log('---------A', args)
        return payload.id === args.id;
      }),
    },
    watchDevices: {
      resolve: (payload) => payload,
      subscribe: () => pubsub.asyncIterator(['updateDeviceLocation', 'newDevice']),
    },
  },
};

export default resolvers;
