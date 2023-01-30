FROM node:18-alpine
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --only=prod
COPY ./ /app
EXPOSE 3001
CMD ["node", "index.js"]
# RUN npm run start
# CMD ["npm", "run", "dev"]
# WORKDIR /usr/app
# COPY ../package*.json /usr/app
# RUN npm install
# EXPOSE 3001
# CMD ["npm", "run", "dev"]