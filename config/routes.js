const express = require('express');
const router = express.Router();

var userController = require('../controller/userController');


router.get('/get/User', userController.registerUser);

module.exports = router;