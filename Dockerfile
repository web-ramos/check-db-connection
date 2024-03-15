FROM node:20-alpine


# RUN addgroup node && \
#     adduser -G node -h /home/node -s /bin/sh -D node

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

RUN npm run build

CMD [ "node", "dist/app.js" ]