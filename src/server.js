const express = require('express');
const morgan = require('morgan')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const busboy = require('connect-busboy');
require('dotenv').config();

const app = express();
app.use(busboy());
const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

const uri = process.env.MONGO_URI;

mongoose.connect(uri, () => console.log("App Db success"))
    .catch(err => console.log(err));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', require('./routes/resources'));


app.listen(process.env.PORT || 5000, () => {
    console.log('Server started on 5000!');
});
