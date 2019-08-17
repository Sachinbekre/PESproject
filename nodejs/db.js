const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydatabase', (err) => {
    if (!err) {
        console.log("connected database successfully...");
    } else {
        console.log("error in connecting database");
    }
});