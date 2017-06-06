import faker from 'faker';

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
      return newDevice;
    },
    updateDeviceLocation: (root, args) => {
      devices.splice(args.id, 1, {
        id: args.id,
        name: devices[args.id].name,
        location: args.location,
      });
      return devices[args.id];
    },
  },
};

export default resolvers;
