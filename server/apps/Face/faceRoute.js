const express = require('express');
const faceController = require('./faceController');

const router = express.Router();

router
  .route('/upload')
  .post(faceController.upload);

router
  .route('/match')
  .post(faceController.match);


module.exports = router;
