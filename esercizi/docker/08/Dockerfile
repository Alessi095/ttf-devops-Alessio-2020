
FROM node:alpine

COPY index.js /app/

ENTRYPOINT [ "node", "/app/index.js" ]

FROM alpine
RUN apk add nodejs
COPY index.js /app/index.js
ENTRYPOINT ["node","app/index.js"]

