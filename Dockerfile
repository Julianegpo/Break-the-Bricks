FROM node:18-bullseye-slim

ADD . /app/break-the-bricks
WORKDIR /app/break-the-bricks

RUN npm install

ENTRYPOINT [ "npm","start" ]