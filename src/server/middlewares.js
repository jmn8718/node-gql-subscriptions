import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import helmet from 'helmet';

export default (app) => {
  if (process.env.NODE_ENV === 'production') {
    app.use(compression());
    app.use(helmet());
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'combined'));
};
