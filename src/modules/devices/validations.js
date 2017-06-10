import Joi from 'joi';

const location = Joi.object({
  lat: Joi.number().min(-85).max(85).required(),
  lng: Joi.number().min(-180).max(180).required(),
});

export default {
  createDevice: {
    body: {
      name: Joi.string().required(),
      location,
    },
  },
  updateDeviceLocation: {
    params: {
      id: Joi.required(),
    },
    body: {
      location,
    },
  },
};
