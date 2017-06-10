import { pubsub } from '../../config/pubsub';
import * as deviceConstants from './constants';
import Device from './model';

export const createDevice = ({ name, location }) => {
  return Device.create({
    name,
    location,
  }).then((device) => {
    pubsub.publish(deviceConstants.CREATE_DEVICE, Object.assign({
      type: deviceConstants.CREATE_DEVICE,
    }, device.toObject()));
    return device;
  });
}

export const updatedDevice = ({ id, location }) => {
  let previousLocation;
  return Device.findById(id)
    .then((device) => {
      previousLocation = {
        lat: device.location.lat,
        lng: device.location.lng,
      };
      device.location = location;
      return device.save();
    })
    .then((device) => {
      pubsub.publish(deviceConstants.UPDATE_DEVICE, Object.assign({
        previousLocation,
        type: deviceConstants.UPDATE_DEVICE,
      }, device.toObject()));
      return device;
    });
}

export const getDevice = (id) => Device.findById(id);

export const getDevices = ({ limit = 0, skip = 0 }) => Device.find()
  .sort({ updatedAt: -1 })
  .skip(skip)
  .limit(limit);
