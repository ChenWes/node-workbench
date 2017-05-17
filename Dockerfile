FROM node:boron

MAINTAINER chenxuhua0530@gmail.com

RUN mkdir -p /usr/src/app
COPY /node-workbench /usr/src/app

WORKDIR /usr/src/app

ENV NODE_ENV=production

RUN npm install -g gulp bower && \
    npm install && \
    bower install --allow-root

EXPOSE 3000

CMD ["npm","start"]

