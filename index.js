const express = require('express')
const app = express()
const port = 3000

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
db = low(adapter)

app.set('view engine', 'pug')
app.set('views', './views')

var bodyParser = require('body-parser')
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug')
app.set('views', './views')

db.defaults({ users: []})
  .write();

  
app.get('/',function (req,res) {
    res.render('index');
});



app.get('/users', function (req,res) {
    res.render('users/user', {
        users: db.get('users').value()
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

app.get('/users/create', function(req,res) {
    res.render('users/create');
})

app.post('/users/create', function(req, res){
    db.get('users').push(req.body).write();
    res.redirect('/users');
})

app.listen(port, () => console.log('Server is listening on port: ' + port));