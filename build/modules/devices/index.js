'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _controllers = require('./controllers');

var controllers = _interopRequireWildcard(_controllers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var router = new _express.Router();

router.post('/', function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            controllers.createDevice(req.body).then(function (device) {
              return res.status(201).json(device);
            }).catch(function (e) {
              return res.status(400).json(e);
            });

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

router.put('/:id', function (req, res, next) {
  var id = req.params.id;
  var location = req.body.location;

  controllers.updatedDevice({ id: id, location: location }).then(function (device) {
    return res.json(device);
  }).catch(function (e) {
    if (e.path === '_id') {
      return next();
    }
    res.status(400).json(e);
  });
});

router.get('/', function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(req, res) {
    var limit, skip;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            limit = parseInt(req.query.limit, 0);
            skip = parseInt(req.query.skip, 0);

            controllers.getDevices({ limit: limit, skip: skip }).then(function (devices) {
              return res.json(devices);
            }).catch(function (e) {
              console.error(e);
              res.status(400).json(e);
            });

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

router.get('/:id', function (req, res, next) {
  controllers.getDevice(req.params.id).then(function (device) {
    return res.json(device);
  }).catch(function (e) {
    if (e.path === '_id') {
      return next();
    }
    res.status(400).json(e);
  });
});

exports.default = router;
//# sourceMappingURL=index.js.map