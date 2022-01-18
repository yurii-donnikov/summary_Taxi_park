FROM node:16.13-alpine3.14

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

EXPOSE 3000

RUN yarn start
