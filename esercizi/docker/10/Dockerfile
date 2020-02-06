FROM alpine
COPY server.js /app/
COPY package.json /app/
WORKDIR /app
RUN npm install
ENTRYPOINT ["node","server.js"]

