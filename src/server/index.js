import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

import createServer from '../config/createServer';
import applyMiddlewares from './middlewares';
import applyRoutes from './routes';

import { schema } from '../graphql';

const PORT = parseInt(process.env.PORT || '3000', 10);

const app = express();
app.set('port', PORT);

applyMiddlewares(app);

app.use('/graphql', graphqlExpress({
  schema,
}));

const HOST = process.env.HOST || 'localhost';
const WS_PROTOCOL = process.env.NODE_ENV === 'development' ? 'ws' : 'wss';

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionsEndpoint: `${WS_PROTOCOL}://${HOST}:${PORT}/subscriptions`,
}));

applyRoutes(app);

export default createServer(app);
