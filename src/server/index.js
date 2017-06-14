import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

import createServer from '../config/createServer';
import applyMiddlewares from './middlewares';
import applyRoutes from './routes';

import { schema } from '../graphql';

const PORT = parseInt(process.env.PORT || '3000', 10);
const WS_PORT = parseInt(process.env.WS_PORT || '3001', 10);
const WS_SERVER_HOST = process.env.WS_SERVER_HOST || 'localhost';
const app = express();
app.set('port', PORT);

applyMiddlewares(app);

app.use('/graphql', graphqlExpress({
  schema,
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionsEndpoint: `ws://${WS_SERVER_HOST}:${WS_PORT}/subscriptions`,
}));

applyRoutes(app);

export default createServer(app);
