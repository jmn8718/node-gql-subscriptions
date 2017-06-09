import faker from 'faker';

import { pubsub } from '../../config/pubsub';

const devices = [];

for (let i = 0; i < 30; i++) {
  devices.push({
    id: i,
    name: faker.random.uuid(),
    currentLocation: {
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
    }
  });
}

export const createDevice = ({ name, location }) => {
  const newDevice = {
    id: devices[devices.length - 1].id + 1,
    name,
    currentLocation: location,
  };
  devices.push(newDevice);
  pubsub.publish('newDevice', newDevice);
  return newDevice;
}

export const updatedDevice = ({ id, location }) => {
  const indexOfDevice = devices.findIndex((device) => device.id === id);
  if (indexOfDevice > -1) {
    const updatedDevice = {
      id,
      name: devices[indexOfDevice].name,
      currentLocation: location,
      previousLocation: devices[indexOfDevice].currentLocation,
    };
    devices.splice(indexOfDevice, 1, updatedDevice);
    pubsub.publish('updateDeviceLocation', updatedDevice);
    return updatedDevice;
  }
  return;
}

export const getDevice = (id) => devices.find((device) => {
  console.log(device.id, id, device.id === id)
  return device.id === id;
});
export const getDevices = () => devices;
