const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const config = require('config');

const resError = require('../helper/resError');
const winston = require('./winston');
const route = require('../routes/routes');

const app = express();

// app.use(winston.info);
app.use(helmet());
app.use(morgan('combined', { stream: winston.end }));
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.static(path.join('public')));
app.use(express.static(path.join('dist')));

app.use(cors());


app.use(`/${config.get('version')}`, route);

app.use((req, res) => {
  const view = path.join(__dirname, '..', '..', 'public', 'index.html');
  res.sendFile(view);
});

app.use(resError.notFound);
app.use(resError.errorHandler);

module.exports = app;
