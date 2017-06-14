'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = _bluebird2.default;

var _process$env = process.env,
    NODE_ENV = _process$env.NODE_ENV,
    MONGO_HOST = _process$env.MONGO_HOST,
    MONGO_PORT = _process$env.MONGO_PORT,
    MONGO_DB = _process$env.MONGO_DB,
    MONGO_USERNAME = _process$env.MONGO_USERNAME,
    MONGO_PASSWORD = _process$env.MONGO_PASSWORD;


var uri = 'mongodb://' + process.env.MONGO_HOST + ':' + process.env.MONGO_PORT + '/' + process.env.MONGO_DB;

var options = NODE_ENV === 'development' ? {} : {
  auth: {
    user: MONGO_USERNAME,
    password: MONGO_PASSWORD
  }
};

// Connect To Database
_mongoose2.default.connect(uri, options).then(function () {
  console.log('Connected to database ' + uri); // eslint-disable-line no-console
}, function (error) {
  console.error('Database error: ' + error); // eslint-disable-line no-console
  process.exit(1);
});
//# sourceMappingURL=mongo.js.map