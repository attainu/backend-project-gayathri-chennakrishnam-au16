const express = require('express');
const viewController = require('../controllers/viewController');

const router = express.Router();

  router.get('/', viewController.getOveriew);
  router.get('/gardens', viewController.getGardens);
  // router.get('/gardens/:slug', viewController.getGarden);
  router.get('/login', viewController.getLoginForm);

module.exports = router;
