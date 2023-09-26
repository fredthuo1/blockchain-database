import React, { useState } from 'react';
import axios from 'axios';

const MonitorTransaction = () => {
    const [transactionId, setTransactionId] = useState('');
    const [transactionDetails, setTransactionDetails] = useState(null);

    const handleCheckTransaction = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/ripple/transaction/${transactionId}`);
            setTransactionDetails(response.data);
        } catch (error) {
            alert('Error: ' + error.response.data);
        }
    }

    return (
        <div>
            <h2>Monitor Transaction</h2>
            <input type="text" value={transactionId} onChange={(e) => setTransactionId(e.target.value)} placeholder="Transaction ID" />
            <button onClick={handleCheckTransaction}>Check</button>
            {transactionDetails && (
                <pre>{JSON.stringify(transactionDetails, null, 2)}</pre>
            )}
        </div>
    );
}

export default MonitorTransaction;
