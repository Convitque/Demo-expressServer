var db = require('../db')
module.exports.postCREATE = function(req, res, next) {
    var errors = [];
    if(!req.body.name) {
        errors.push("Name is required.")
    }
    if(!req.body.phone) {
        errors.push("Phone is required");
    }
    if(errors.length) {
        res.render('users/create',{
            errors: errors,
            values: req.body
        })
        return;
    }
    next();
}

module.exports.authLogin = function(req, res, next) {
    if(!req.cookies.userId) {
        res.redirect('/auth/login');
        return;
    }

    var user = db.get('users').find({id: req.cookies.userId}).value();
    if(!user) {
        res.redirect('/auth/login');
        return;
    }
    next();
}