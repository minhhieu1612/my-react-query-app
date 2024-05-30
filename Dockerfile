FROM node:20.12.1-alpine

COPY package.json package.json

RUN npm i

COPY . .

RUN npm run dev

EXPOSE 3000