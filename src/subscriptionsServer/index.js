import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';
import { schema } from '../graphql';

const WS_SERVER_PORT = parseInt(process.env.WS_SERVER_PORT || '3001', 10);

// Create WebSocket listener server
const websocketServer = createServer((request, response) => {
  response.writeHead(404);
  response.end();
});

// Bind it to port and start listening
websocketServer.listen(WS_SERVER_PORT, () => console.log(
  `Websocket Server is now running on http://localhost:${WS_SERVER_PORT}`
));

const subscriptionServer = SubscriptionServer.create({
  schema,
  execute,
  subscribe,
}, {
  server: websocketServer,
  path: '/subscriptions',
});

export default subscriptionServer;
