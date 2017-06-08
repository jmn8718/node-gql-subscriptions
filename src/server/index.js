import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

import createServer from '../config/createServer';
import applyMiddlewares from './middlewares';
import applyRoutes from './routes';

import { schema } from '../graphql';

const SERVER_PORT = parseInt(process.env.SERVER_PORT || '3000', 10);
const WS_SERVER_PORT = parseInt(process.env.WS_SERVER_PORT || '3001', 10);

const app = express();
app.set('port', SERVER_PORT);

applyMiddlewares(app);

app.use('/graphql', graphqlExpress({
  schema,
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionsEndpoint: `ws://localhost:${WS_SERVER_PORT}/subscriptions`,
}));

applyRoutes(app);

export default createServer(app);
