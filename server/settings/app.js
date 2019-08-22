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

// // Point static path to dist
// app.use('/', express.static(path.join(__dirname, '..', 'dist')));
// app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));

// app.get('/api/download/', (req, res, next) => {
//   console.log('call');
//   return res.download('mypdf.pdf', (err) => {
//     if (err) {
//       console.log(err);
//       return res.status(404).json({
//         error: {
//           message: "File not found"
//         },
//       });
//     }
//     console.log("File is downloaded.");
//   });
// });


app.use(`/${config.get('version')}`, route);

app.use((req, res) => {
  const view = path.join(__dirname, '..', '..', 'public', 'index.html');
  res.sendFile(view);
});

app.use(resError.notFound);
app.use(resError.errorHandler);

module.exports = app;
