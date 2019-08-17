const express = require('express');
var router = express.Router();
var objectId = require('mongoose').Types.ObjectId;

var storedata = require('../models/login.js');
//=> localhost:3000/transactions/
router.get('/', (req, res) => {
    storedata.find((err, docs) => {
        // console.log(docs);
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Users :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.post('/', (req, res) => {
    // console.log(res);
    storedata.findOne({ userName: req.body.userName}, function (err, users) {
        if(users==null){
            console.log("user not found");
            return res.json({'err_code':201,'err_msg':'failure'});
        }else if (users.userName === req.body.userName && users.password === req.body.password) {
            // res.status(200).send("Logged in succesfully.");
             console.log("Logged in succesfully.");
            return res.json({'err_code':200,data:users,'err_msg':'success'});
           ;
        } else {
            // res.status(400).send("Error in Login.");
            console.log("Error in Login.");
            return res.json({'err_code':201,'err_msg':'failure'});
        }
    });
});


module.exports = router;
