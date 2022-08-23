FROM node:16-slim

WORKDIR /usr/src/app/client

COPY package*.json ./

RUN mkdir .next && npm install

RUN chown -Rh node:node .next node_modules

EXPOSE 3000

CMD ["npm", "run", "dev"]