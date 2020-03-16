
FROM node:alpine

COPY package.json /app/
WORKDIR /app
RUN npm install
COPY server.js /app/

EXPOSE 3000

ENTRYPOINT [ "node", "/app/server.js" ]

FROM alpine
COPY server.js /app/
COPY package.json /app/
WORKDIR /app
RUN npm install
ENTRYPOINT ["node","server.js"]


