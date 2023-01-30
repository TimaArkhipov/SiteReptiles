FROM node:16-alpine
RUN npm install -g nodemon
WORKDIR /usr/app
COPY package*.json /usr/app
RUN npm install
COPY ./ ./
EXPOSE 3002
CMD ["npm", "run", "dev"]