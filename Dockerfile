FROM node:10
WORKDIR /app
COPY package.json /app
RUN npm install
ENV MONGO_URI="mongodb+srv://piyushg9794:passwordnahi@123@cluster0.xb032.mongodb.net/Resources?retryWrites=true&w=majority"
COPY . /app
CMD ["npm", "start"]