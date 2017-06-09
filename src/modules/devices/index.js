import express from 'express';
const router = express.Router();

import * as devices from './controller';

router.post('/', (req, res) => {
  const device = devices.createDevice(req.body);
  res.status(201).json(device);
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { location } = req.body;
  const device = devices.updatedDevice({ id: parseInt(id, 10), location });
  if (!device) {
    return next();
  }
  res.json(device);
});

router.get('/', (req, res) => {
  res.status(200).json(devices.getDevices());
});

router.get('/:id', (req, res, next) => {
  const device = devices.getDevice(parseInt(req.params.id, 10));
  if (!device) {
    return next();
  }
  res.json(device);
});

export default router;
