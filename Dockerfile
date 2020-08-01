FROM node:10-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install
ADD src /app/src
ADD public /app/public

RUN yarn build

RUN yarn global add serve
CMD ["serve", "-s", "build", "-l", "4000"]