const ripple = require('ripple-lib');
const api = new ripple.RippleAPI({
    server: 'wss://s.altnet.rippletest.net:51233/'
});

// Get Balance
exports.getBalance = async (req, res) => {
    const { address } = req.params;
    try {
        await api.connect();
        const balance = await api.getBalances(address);
        res.json(balance);
        await api.disconnect();
    } catch (error) {
        res.status(500).send('Error fetching balance: ' + error);
    }
};

// Send XRP
exports.sendXRP = async (req, res) => {
    const { sourceAddress, secret, destinationAddress, amount } = req.body;
    await api.connect();

    const payment = {
        source: {
            address: sourceAddress,
            maxAmount: {
                value: amount.toString(),
                currency: 'XRP',
            },
        },
        destination: {
            address: destinationAddress,
            amount: {
                value: amount.toString(),
                currency: 'XRP',
            },
        },
    };

    try {
        if (!await api.isConnected()) {
            await api.connect();
        }

        const prepared = await api.preparePayment(sourceAddress, payment);
        const { signedTransaction } = api.sign(prepared.txJSON, secret);

        // Check if the transaction was signed successfully.
        if (!signedTransaction) {
            throw new Error('Error signing transaction.');
        }

        const result = await api.submit(signedTransaction);
        res.json(result);
    } catch (error) {
        res.status(500).send('Error sending XRP: ' + error);
    }
};

exports.monitorTransaction = async (req, res) => {
    const { transactionId } = req.params;
    await api.connect();

    try {
        // Check if the transaction exists.
        const tx = await api.getTransaction(transactionId);
        if (!tx) {
            throw new Error('Transaction does not exist.');
        }

        res.json(tx);
    } catch (error) {
        res.status(500).send('Error fetching transaction: ' + error);
    }
};

exports.getTransactionHistory = async (req, res) => {
    const { address } = req.params;
    await api.connect();

    try {
        // Check if the transaction history exists.
        const transactions = await api.getTransactions(address);
        if (!transactions) {
            throw new Error('Transaction history does not exist.');
        }

        res.json(transactions);
    } catch (error) {
        res.status(500).send('Error fetching transaction history: ' + error);
    }
};
