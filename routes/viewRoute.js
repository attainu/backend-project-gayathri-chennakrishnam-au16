const express = require('express');
const viewController = require('../controllers/viewController');

const router = express.Router();

  router.get('/', viewController.getOveriew);
  router.get('/gardens', viewController.getGardens);

module.exports = router;
