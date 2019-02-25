module.exports.requireAuth = function (req, res, next) {
 if(!req.cookies.usersID){
     res.redirect('/auth/login');
    return;
    }   
    var user = db.get('users').find({id: req.cookies.userID}).value();

    if(!user) {
        res.redirect('/auth/login');
        return;
    }
    next();
}