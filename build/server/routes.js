'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _devices = require('../modules/devices');

var _devices2 = _interopRequireDefault(_devices);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  app.use('/api/v1/devices', _devices2.default);

  app.get('/', function (req, res) {
    res.json({
      name: process.env.NAME,
      environment: process.env.NODE_ENV,
      resources: ['/api/v1/device']
    });
  });

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handler
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      status: err.status || 500
    });
  });
};
//# sourceMappingURL=routes.js.map