FROM node:16.17.0-alpine AS builder
WORKDIR /usr
# COPY package.json ./
# COPY tsconfig.json ./
COPY . .
RUN ls -a
RUN npm install
RUN npm run build

## this is stage two , where the app actually runs

FROM node:16.17.0-alpine
WORKDIR /usr
COPY package.json .
RUN npm install --only=production
COPY --from=builder /usr/dist .
EXPOSE ${PORT}
CMD ["npm","run","dev"]