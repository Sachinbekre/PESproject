const mongoose = require('mongoose');

var Jms = mongoose.Schema({
    siteId: String,
    locationName: String,
    siteType: String,
    woNo : String,
    date: String,
    description: String,
    unit: String,
    qty: String,
}, {
        strict: false,
        collection: 'Jms'
    });

module.exports = mongoose.model('Jms', Jms);