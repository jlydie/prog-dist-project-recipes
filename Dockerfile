FROM node:10

WORKDIR /Users/lydiejeyaranjan/Desktop/recipes

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "node", "app.js" ]
