
var express = require('express');
var controller = require('./controller');

var router = express.Router();

//add your sub-routes (you can think them as remote functions)
router.post('/', controller.helloWorld);

module.exports = router;