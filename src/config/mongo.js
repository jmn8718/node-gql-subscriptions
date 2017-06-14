import mongoose from 'mongoose';
import Promise from 'bluebird';

mongoose.Promise = Promise;

const { NODE_ENV, MONGO_HOST, MONGO_PORT, MONGO_DB, MONGO_USERNAME, MONGO_PASSWORD } = process.env;

const uri = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;

const options = NODE_ENV === 'development' ? {} : {
  auth: {
    user: MONGO_USERNAME,
    password: MONGO_PASSWORD,
  },
};

// Connect To Database
mongoose.connect(uri, options)
  .then(
    () => {
      console.log(`Connected to database ${uri}`);  // eslint-disable-line no-console
    },
    (error) => {
      console.error(`Database error: ${error}`); // eslint-disable-line no-console
      process.exit(1);
    }
  );
