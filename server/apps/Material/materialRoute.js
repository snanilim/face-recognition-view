const express = require('express');
const materialController = require('./materialController');

const router = express.Router();

router
  .route('/')
  .get(materialController.materials)
  .post(materialController.createMaterial);

router
  .route('/:materialID')
  .get(materialController.getOneMaterial)
  .put(materialController.updateMaterial)
  .delete(materialController.deleteMaterial);


module.exports = router;
