FROM node:alpine
WORKDIR /app/test
ADD package*.json ./
RUN npm install 
ADD . .
CMD node app.js