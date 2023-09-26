const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    fromAddress: String,
    toAddress: String,
    amount: Number,
    transactionDate: {
        type: Date,
        default: Date.now
    },
    status: String
});

module.exports = mongoose.model('Transaction', transactionSchema);
