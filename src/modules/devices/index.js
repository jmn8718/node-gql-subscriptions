import { Router } from 'express';

import * as controllers from './controllers';

const router = new Router();

router.post('/', async (req, res) => {
  controllers.createDevice(req.body)
    .then((device) => res.status(201).json(device))
    .catch((e) => res.status(400).json(e));
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { location } = req.body;
  controllers.updatedDevice({ id, location })
    .then((device) => res.json(device))
    .catch((e) => {
      if (e.path === '_id'){
        return next();
      }
      res.status(400).json(e);
    });
});

router.get('/', async (req, res) => {
  const limit = parseInt(req.query.limit, 0);
  const skip = parseInt(req.query.skip, 0);
  controllers.getDevices({ limit, skip })
    .then((devices) => res.json(devices))
    .catch((e) => {
      console.error(e);
      res.status(400).json(e);
    });
});

router.get('/:id', (req, res, next) => {
  controllers.getDevice(req.params.id)
    .then((device) => res.json(device))
    .catch((e) => {
      if (e.path === '_id'){
        return next();
      }
      res.status(400).json(e);
    });
});

export default router;
