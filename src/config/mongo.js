import mongoose from 'mongoose';
import Promise from 'bluebird';

mongoose.Promise = Promise;

const { NODE_ENV, MONGO_URL, MONGO_PORT, MONGO_COLLECTION, MONGO_USERNAME, MONGO_PASSWORD } = process.env;
let DB;
if (NODE_ENV === 'development') {
  DB = `mongodb://${process.env.MONGO_URL}:${process.env.MONGO_PORT}/${process.env.MONGO_COLLECTION}`;
} else {
  DB = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}:${process.env.MONGO_PORT}/${process.env.MONGO_COLLECTION}`;
}

// Connect To Database
mongoose.connect(DB);

// On Connection
mongoose.connection.on('connected', () => {
  console.log(`Connected to database ${DB}`);  // eslint-disable-line no-console
});

// On Error
mongoose.connection.on('error', (err) => {
  console.error(`Database error: ${err}`); // eslint-disable-line no-console
});
