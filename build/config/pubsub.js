'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pubsub = undefined;

var _graphqlRedisSubscriptions = require('graphql-redis-subscriptions');

var _process$env = process.env,
    REDIS_HOST = _process$env.REDIS_HOST,
    REDIS_PORT = _process$env.REDIS_PORT,
    REDIS_PASSWORD = _process$env.REDIS_PASSWORD;
var pubsub = exports.pubsub = new _graphqlRedisSubscriptions.RedisPubSub({
  connection: {
    host: REDIS_HOST,
    port: REDIS_PORT,
    password: REDIS_PASSWORD
  },
  connectionListener: function connectionListener(error) {
    if (error) {
      console.error('Error connecting to redis', error);
      process.exit(1);
    }
    console.log('Connected to redis PUBSUB ' + REDIS_HOST + ':' + REDIS_PORT);
  }
});
//# sourceMappingURL=pubsub.js.map