const express = require('express');
const faceRoute = require('../apps/Face/faceRoute');


const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({ message: 'Welcome To React Api View' });
});

router.use('/face', faceRoute);

module.exports = router;
