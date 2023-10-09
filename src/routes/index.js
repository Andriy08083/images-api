const router = require('express').Router();

const mainController = require('../controllers');

router.get('/connection', mainController.healthCheck);

module.exports = router;
