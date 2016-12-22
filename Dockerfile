FROM node:6
MAINTAINER stanley@linuxsimba.com

RUN mkdir -p /opt/testweb
WORKDIR /opt/testweb

COPY ./package.json .
COPY ./server.js .

RUN npm install

CMD ["npm", "start"]
