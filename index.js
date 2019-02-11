const express = require('express')
const app = express()
const port = 3000

var bodyParser = require('body-parser')
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug')
app.set('views', './views')


app.get('/',function (req,res) {
    res.render('index');
});

var  users = [
    {id: 1, name: 'Thang'},
    {id: 2, name:'Thinhg'}
];

app.get('/users', function (req,res) {
    res.render('users/user', {
        users: users
    })
});


app.get('/users/search',function (req,res) {
    var q = req.query.q;
    var mathedUser = users.filter(function(user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    res.render('users/user', {
        users: mathedUser
    })
})

app.get = function (s, f) {
    
}
app.get('/users/create', function(req,res) {
    res.render('users/create');
})

app.post('/users/create', function(req, res){
    users.push(req.body);
    res.redirect('/users');
})

app.listen(port, () => console.log('Server is listening on port: ' + port));