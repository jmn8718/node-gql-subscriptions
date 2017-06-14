'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = require('http');

var _subscriptionsTransportWs = require('subscriptions-transport-ws');

var _graphql = require('graphql');

var _graphql2 = require('../graphql');

var WS_PORT = parseInt(process.env.WS_PORT || '3001', 10);

// Create WebSocket listener server
var websocketServer = (0, _http.createServer)(function (request, response) {
  response.writeHead(404);
  response.end();
});

// Bind it to port and start listening
websocketServer.listen(WS_PORT, function () {
  return console.log('Websocket Server is now running on port: ' + WS_PORT);
});

var subscriptionServer = _subscriptionsTransportWs.SubscriptionServer.create({
  schema: _graphql2.schema,
  execute: _graphql.execute,
  subscribe: _graphql.subscribe
}, {
  server: websocketServer,
  path: '/subscriptions'
});

exports.default = subscriptionServer;
//# sourceMappingURL=index.js.map