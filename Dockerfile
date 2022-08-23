FROM node:16.17.0-alpine
WORKDIR /usr
COPY . .
RUN npm install
EXPOSE ${PORT}
CMD ["npm","run","dev"]