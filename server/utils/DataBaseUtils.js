var mongoose = require('mongoose');
var User = require('../models/user.js');

exports.find = function() {
    var res = User.find();
    return res;
}
