FROM node:10
WORKDIR /app
EXPOSE 3000
COPY . /app
RUN npm run heroku-postbuild
CMD ["npm", "start"]