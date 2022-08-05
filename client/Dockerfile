FROM node:16-slim

WORKDIR /usr/src/app/client

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]