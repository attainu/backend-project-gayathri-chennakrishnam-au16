const express = require('express');
const gardenController = require('./../controllers/gardenController');

const router = express.Router();

router
  .route('/')
  .get(gardenController.getAllGardens)
  .post(gardenController.addGarden);
router
  .route('/:id')
  .get(gardenController.getGarden)
  .patch(gardenController.updateGarden)
  .delete(gardenController.deleteGarden);

module.exports = router;
