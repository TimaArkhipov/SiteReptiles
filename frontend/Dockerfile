FROM node:18-alpine
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --only=prod
COPY . /app
EXPOSE 3000
RUN npm run build