const express = require('express');
const authRoute = require('../apps/Auth/authRoute');


const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({ message: 'Welcome To React Api View' });
});

router.use('/face', authRoute);

module.exports = router;
