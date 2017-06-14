import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';
import { schema } from '../graphql';

export default (server) => {
  return SubscriptionServer.create({
    schema,
    execute,
    subscribe,
  }, {
    server,
    path: '/subscriptions',
  });
};
