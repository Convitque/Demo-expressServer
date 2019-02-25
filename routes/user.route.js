var express = require('express');
var router = express.Router();


var validate = require("../middleware/user.middleware")
var controllers = require('../controllers/user.controllers') 



router.get('/', controllers.index);

router.get('/search', controllers.search)

router.get('/create', controllers.create)

router.get('/:id', controllers.id)

router.post('/create',validate.postCREATE, controllers.POSTcreate)

module.exports = router;