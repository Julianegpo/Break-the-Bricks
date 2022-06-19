FROM node:18-bullseye-slim

ADD . /app/break-the-bricks
WORKDIR /app/break-the-bricks

RUN npm install
RUN npm run build

ENTRYPOINT [ "npm","run","start" ]