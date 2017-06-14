FROM node:8.0-slim

COPY .babelrc /app/.babelrc
COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

WORKDIR /app

RUN yarn install

COPY ./src /app/src

ENTRYPOINT ["yarn", "start"]
