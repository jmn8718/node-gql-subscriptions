import 'babel-polyfill';

import './config/mongo';
import server from  './server';
import createWS from './subscriptionsServer';

const wsServer = createWS(server);
