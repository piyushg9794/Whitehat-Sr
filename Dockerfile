FROM node:10
WORKDIR /app
COPY package.json /app
RUN npm install
ENV PORT_B=5000
ENV MONGO_URI="mongodb+srv://piyushg9794:passwordnahi@123@cluster0.xb032.mongodb.net/Resources?retryWrites=true&w=majority"
EXPOSE 3000
COPY . /app
RUN node src/server.js
RUN npm run heroku-postbuild
CMD ["npm", "start"]