var express = require('express');
var router = express.Router();

var db = require('../db');
const shortid = require('shortid');

module.exports = router;


router.get('/', function (req, res) {
    res.render('users/user', {
        users: db.get('users').value()
    })
});



router.get('/search', function (req, res) {
    var q = req.query.q;

    var mathedUsers = db.get('users').value().filter(function(user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

    console.mathedUser;
    res.render('users/user', {
        users: mathedUsers
    })
})

router.get('/create', function (req, res) {
    res.render('users/create');
})


router.get('/:id', function (req, res) {
    var id = req.params.id;

    var user = db.get('users').find({
        id: id
    }).value();
    res.render('users/view', {
        user: user
    })
})

router.post('/create', function (req, res) {
    req.body.id = shortid.generate();
    db.get('users').push(req.body).write();
    res.redirect('/');
})