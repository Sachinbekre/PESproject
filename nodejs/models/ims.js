const mongoose = require('mongoose');

var Ims = mongoose.Schema({
    locationId: String,
    woNo : String,
    locationName: String,
    startDate: String,
    qty: String,
    rate: String,
    amount: String,
}, {
        strict: false,
        collection: 'Ims'
    });

module.exports = mongoose.model('Ims', Ims);