import express from 'express';

import createServer from '../config/createServer';
import applyMiddlewares from './middlewares';
import applyRoutes from './routes';

const SERVER_PORT = parseInt(process.env.SERVER_PORT, 10);

const app = express();
app.set('port', SERVER_PORT);

applyMiddlewares(app);
applyRoutes(app);

export default createServer(app);
