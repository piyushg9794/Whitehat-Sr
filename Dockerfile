FROM node:10
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm run heroku-postbuild
ENV PORT_B=5000
COPY . /app
CMD ["npm", "start"]
EXPOSE 3000