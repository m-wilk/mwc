FROM node:19-alpine

WORKDIR /mwc-front/app

COPY ./app/package.json .

RUN npm install

COPY ./app .

# CMD ["npm", "start"]
