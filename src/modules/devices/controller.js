import faker from 'faker';

import { pubsub } from '../../config/pubsub';
import * as deviceConstants from './constants';

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

export const createDevice = ({ name, location }) => {
  const newDevice = {
    id: devices[devices.length - 1].id + 1,
    name,
    location: location,
  };
  devices.push(newDevice);
  pubsub.publish(deviceConstants.CREATE_DEVICE, Object.assign({
    type: deviceConstants.CREATE_DEVICE,
  }, newDevice));
  return newDevice;
}

export const updatedDevice = ({ id, location }) => {
  const deviceId = typeof id === 'string' ? parseInt(id, 10) : id;
  const indexOfDevice = devices.findIndex((device) => device.id === deviceId);
  if (indexOfDevice > -1) {
    const updatedDevice = {
      id: deviceId,
      name: devices[indexOfDevice].name,
      location: location,
    };
    devices.splice(indexOfDevice, 1, updatedDevice);
    pubsub.publish(deviceConstants.UPDATE_DEVICE, Object.assign({
      previousLocation:updatedDevice.location,
      type: deviceConstants.UPDATE_DEVICE,
    }, updatedDevice));
    return updatedDevice;
  }
  return;
}

export const getDevice = (id) => devices.find((device) => {
  return device.id === id;
});

export const getDevices = () => devices;
