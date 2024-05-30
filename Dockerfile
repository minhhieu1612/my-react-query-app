FROM node:20.12.1-alpine

COPY package.json package.json

RUN npm i

COPY . .

EXPOSE 3000