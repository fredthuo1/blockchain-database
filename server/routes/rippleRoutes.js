const express = require('express');
const router = express.Router();
const rippleController = require('../controllers/rippleController');

// Existing endpoint to get balance
router.get('/balance/:address', rippleController.getBalance);

// Endpoint to send XRP
router.post('/send', rippleController.sendXRP);

// Endpoint to monitor a specific transaction
router.get('/transaction/:transactionId', rippleController.monitorTransaction);

// Endpoint to get transaction history for an account
router.get('/history/:address', rippleController.getTransactionHistory);


module.exports = router;
