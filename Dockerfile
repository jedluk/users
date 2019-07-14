FROM node:10-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

ADD src /app/src

COPY .babelrc ./
RUN npm test

COPY webpack.config.js ./

RUN npm run build:prod

RUN npm install -g serve

CMD ["serve", "-s", "dist", "-l", "4000"]