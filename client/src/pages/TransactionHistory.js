import React, { useState } from 'react';
import axios from 'axios';

const TransactionHistory = () => {
    const [address, setAddress] = useState('');
    const [transactions, setTransactions] = useState([]);

    const handleGetHistory = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/ripple/history/${address}`);
            setTransactions(response.data);
        } catch (error) {
            alert('Error: ' + error.response.data);
        }
    }

    return (
        <div>
            <h2>Transaction History</h2>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Ripple Address" />
            <button onClick={handleGetHistory}>Get History</button>
            {transactions.length > 0 && (
                <pre>{JSON.stringify(transactions, null, 2)}</pre>
            )}
        </div>
    );
}

export default TransactionHistory;
