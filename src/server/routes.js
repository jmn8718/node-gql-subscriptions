import devices from '../modules/devices';

export default (app) => {
  app.use('/api/v1/devices', devices);

  app.get('/', (req, res) => {
    res.json({
      name: process.env.NAME,
      environment: process.env.NODE_ENV,
      resources: [
        '/api/v1/device',
      ],
    });
  });

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handler
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      status: err.status || 500,
    });
  });
};
