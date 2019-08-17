const express = require('express');
var router = express.Router();
var objectId = require('mongoose').Types.ObjectId;

// var { Patients } = require('../controller/patientsCntrl.js');
var storedata = require('../models/ims.js');
//=> localhost:3000/workorder/
router.get('/', (req, res) => {
    storedata.find((err, docs) => {
        // console.log(docs);
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Ims :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    console.log(req.params);
    if (!objectId.isValid(req.params.id)) {
        return res.status(400).send(`no record given id:${req.params.id}`);
    } else {
        storedata.findById(req.params.id, (err, docs) => {
            if (!err) { res.send(docs) }
            else { console.log('Error in Retriving Ims :' + JSON.stringify(err, undefined, 2)); }
        });
    }
});
router.post('/', (req, res) => {
    console.log(req.body);
    let pat = new storedata({
        locationId: req.body.locationId,
        woNo: req.body.woNo,
        locationName: req.body.locationName,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
    });
    pat.save((err, doc) => {
        if (!err) { res.send(doc) }
        else { console.log("error in Ims Save :" + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    // console.log(req.body._id);
    if (objectId.isValid(req.body._id)) {
        console.log("matched");
        let pat = {
            locationId: req.body.locationId,
            woNo: req.body.woNo,
            locationName: req.body.locationName,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
        };
        storedata.update({'_id':req.body._id}, { $set: pat }, (err, docs) => {
            if (!err) { res.send(docs); }
            else { console.log("error in Ims Update :" + JSON.stringify(err, undefined, 2)); }
        });
        // }else{
        //     return res.status(400).send(`no record given id:${req.params.id}`);
    }


});
router.delete('/:id', (req, res) => {
    // if (!req.params.id) return res.status(201).send('Invalid id');
    if (objectId.isValid(req.params.id)) {
        storedata.findByIdAndRemove(req.params.id, (err, docs) => {
            if (!err) { res.send(docs); }
            else {
                console.log("error in Ims Delete :" + JSON.stringify(err, undefined, 2));
                return res.status(400).send(`no record given id:${req.params.id}`);
            }
        });
    } else {
        return res.status(400).send(`no record given id:${req.params.id}`);
    }
    // return res.status(400).send(`no record given id:${req.params.id}`);
    // storedata.findByIdAndRemove(req.params.id,(err,docs)=>{
    //     if (!err) { res.send(docs); }
    //     else { console.log("error in Patients Delete :" + JSON.stringify(err, undefined, 2)); }
    // })
});
module.exports = router;