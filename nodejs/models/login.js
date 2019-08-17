const mongoose = require('mongoose');

var Users = mongoose.Schema({
    userName: String,
    password: String,
},
    {
        strict: false,
        collection: 'users'
    });

module.exports = mongoose.model('Users', Users);