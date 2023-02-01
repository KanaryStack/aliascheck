FROM node:16-slim

WORKDIR /usr/src/app/client

COPY package*.json ./

RUN mkdir .next && npm install --legacy-peer-deps

RUN chown -Rh node:node .next node_modules

USER node

EXPOSE 3000

CMD ["npm", "run", "dev"]