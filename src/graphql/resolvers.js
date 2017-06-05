import faker from 'faker';

const devices = [];

for (let i = 0; i < 250; i++) {
  devices.push({
    id: i,
    name: faker.random.uuid(),
    location: {
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
    }
  })
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
};

export default resolvers;
