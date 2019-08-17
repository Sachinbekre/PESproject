const mongoose = require('mongoose');

var Workorder = mongoose.Schema({
    // SlNo: String,
    woNo : String,
    itemCode: String,
    description: String,
    uom: String,
    qty: Number,
    rate: Number,
    amount: Number,
}, {
        strict: false,
        collection: 'Workorder'
    });

module.exports = mongoose.model('Workorder', Workorder);