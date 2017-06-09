import express from 'express';
const router = express.Router();

import * as devices from './controller';

router.post('/', (req, res) => {
  console.log(req.body);
  const device = devices.createDevice(req.body);
  console.log(device);
  res.status(201).json(device);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { location } = req.body;
  const device = devices.updatedDevice({ id: parseInt(id, 10), location });
  if (!device) {
    res.status(404);
    res.json({
      status: 404,
      message: `Device "${req.params.id}" not found`,
    });
  } else {
    res.json(device);
  }
});

router.get('/', (req, res) => {
  res.status(200).json(devices.getDevices());
});

router.get('/:id', (req, res) => {
  const device = devices.getDevice(parseInt(req.params.id, 10));
  if (!device) {
    res.status(404);
    res.json({
      status: 404,
      message: `Device "${req.params.id}" not found`,
    });
  } else {
    res.json(device);
  }
});

export default router;
