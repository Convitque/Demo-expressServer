var express = require('express');
var router = express.Router();

var db = require('../db');
const shortid = require('shortid');

var validate = require("../validate/user.validate")
var controllers = require('../controllers/user.controllers') 

module.exports = router;


router.get('/', controllers.index);

router.get('/search', controllers.search)

router.get('/create', controllers.create)

router.get('/:id', controllers.id)

router.post('/create',validate.postCREATE, controllers.POSTcreate)

