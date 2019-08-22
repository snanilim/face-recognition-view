const express = require('express');
const costController = require('./costController');

const router = express.Router();

router
  .route('/')
  .get(costController.costs)
  .post(costController.createCost);

router
  .route('/:costID')
  .get(costController.getOneCost)
  .put(costController.updateCost)
  .delete(costController.deleteCost);


module.exports = router;
