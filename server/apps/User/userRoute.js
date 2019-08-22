const express = require('express');
const userController = require('./userController');

const router = express.Router();

router
  .route('/')
  .get(userController.users)
  .post(userController.createUser);

router
  .route('/:userID')
  .get(userController.getOneUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);


module.exports = router;
