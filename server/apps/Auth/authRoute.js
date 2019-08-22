const express = require('express');
const authController = require('./authController');

const router = express.Router();

router
  .route('/upload')
  .post(authController.upload);

router
  .route('/match')
  .post(authController.match);


module.exports = router;
