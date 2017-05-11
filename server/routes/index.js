var path = require('path');
var passport = require('passport');
var app = require('express').Router();
var db = require('../utils/DataBaseUtils');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

app.get('/info', function(req, res) {
    if(req.user) {
        res.send(req.user.email);
    } else {
        res.send('test');
    }
});

app.get('/success', function(req, res) {
   res.send('success');
});
app.get('/failure', function(req, res) {
    res.send('fail');
});

app.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
});

app.post('/login',
    passport.authenticate('login', { successRedirect: '/success',
        failureRedirect: '/failure' })
);

app.post('/signup', passport.authenticate('signup', {
    successRedirect: '/success',
    failureRedirect: '/failure',
    failureFlash : true
}));

module.exports = app;
