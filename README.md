# node-gql-subscriptions
**Work in progress**

Graphql Server build with node and apollo server.
The server also implements the Graphql subscriptions.
## Posts
1. [Part 1 - Graphql subscriptions with Apollo server](https://medium.com/@jmn8718/graphql-subscriptions-with-apollo-server-387d82d1a7ca)

## Requirement
- node (I use v8)
- npm
- docker
- docker-compose
- mongodb (No need to have it running if you use docker-compose)
- redis (No need to have it running if you use docker-compose)

***note*** If you dont want to use docker, you can run it with the npm scripts, but you will have to run a mongodb and redis instances and set the environment variables.

## Quickstart
1. Clone the repo in you local machine
`git clone https://github.com/jmn8718/node-gql-subscriptions.git`
2. Create a .env file, you can duplicate the .env.example and set your value.
3. Build the images with docker compose
`docker-compose build`
4. Start the project with docker compose
`docker-compose up`
5. Now that the server is up, we can:
  - Go to [http://localhost:3000/graphiql](http://localhost:3000/graphiql) and you will see the *graphiql* interface
  - Call the API endpoints *ex.* [http://localhost:3000/api/v1/devices](http://localhost:3000/api/v1/devices)

## Pubsub
Graphql uses a pubsub system to publish and subscribe to subscriptions.
I use redis and [graphql-redis-subscriptions](https://github.com/davidyaha/graphql-redis-subscriptions) package.

## Useful links
- [Graphql operations of the server](docs/)
- [Apollo server](http://dev.apollodata.com/tools/graphql-server/)
- [Set up Graphql subscriptions](http://dev.apollodata.com/tools/graphql-subscriptions/index.html)
