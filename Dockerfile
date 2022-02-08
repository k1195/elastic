FROM node:16.13.2

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g pm2

COPY . ./

EXPOSE 3001
EXPOSE 9200

CMD npm run start