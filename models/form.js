const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    userID: String,
    marketID: String,
    marketName: String,
    cmdtyID: String,
    marketType: String,
    cmdtyName: String,
    users: {
        type: [String],
        // default: undefined
    },
    priceUnit: String,
    convFctr: Number,
    price: Number
});

module.exports = mongoose.model('Gramody', PostSchema);