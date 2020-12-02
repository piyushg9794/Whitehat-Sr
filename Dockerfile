FROM node:10
WORKDIR /app
COPY package.json /app
RUN npm install
ENV PORT_B=5000
EXPOSE 3000
COPY . /app
RUN node src/server.js
RUN npm run heroku-postbuild
CMD ["npm", "start"]