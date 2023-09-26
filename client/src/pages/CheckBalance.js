import React, { useState } from 'react';
import axios from 'axios';

const CheckBalance = () => {
    const [address, setAddress] = useState('');
    const [balance, setBalance] = useState('');

    const handleCheckBalance = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/ripple/balance/${address}`);
            setBalance(response.data[0].value);
        } catch (error) {
            alert('Error: ' + error.response.data);
        }
    }

    return (
        <div>
            <h2>Check Balance</h2>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Ripple Address" />
            <button onClick={handleCheckBalance}>Check</button>
            <p>Balance: {balance} XRP</p>
        </div>
    );
}

export default CheckBalance;
