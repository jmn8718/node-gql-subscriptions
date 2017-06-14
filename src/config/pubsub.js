import { RedisPubSub } from 'graphql-redis-subscriptions';

const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } = process.env;

export const pubsub = new RedisPubSub({
  connection: {
    host: REDIS_HOST,
    port: REDIS_PORT,
    password: REDIS_PASSWORD,
  },
  connectionListener: (error) => {
    if (error) {
      console.error('Error connecting to redis', error);
      process.exit(1);
    }
    console.log(`Connected to redis PUBSUB ${REDIS_HOST}:${REDIS_PORT}`);
  },
});
