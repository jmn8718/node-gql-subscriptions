'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _graphqlServerExpress = require('graphql-server-express');

var _createServer = require('../config/createServer');

var _createServer2 = _interopRequireDefault(_createServer);

var _middlewares = require('./middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _graphql = require('../graphql');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SERVER_PORT = parseInt(process.env.SERVER_PORT || '3000', 10);
var WS_SERVER_PORT = parseInt(process.env.WS_SERVER_PORT || '3001', 10);
var WS_SERVER_HOST = process.env.WS_SERVER_HOST || 'localhost';
var app = (0, _express2.default)();
app.set('port', SERVER_PORT);

(0, _middlewares2.default)(app);

app.use('/graphql', (0, _graphqlServerExpress.graphqlExpress)({
  schema: _graphql.schema
}));

app.use('/graphiql', (0, _graphqlServerExpress.graphiqlExpress)({
  endpointURL: '/graphql',
  subscriptionsEndpoint: 'ws://' + WS_SERVER_HOST + ':' + WS_SERVER_PORT + '/subscriptions'
}));

(0, _routes2.default)(app);

exports.default = (0, _createServer2.default)(app);
//# sourceMappingURL=index.js.map