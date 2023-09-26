import React, { useState } from 'react';
import axios from 'axios';

const SendXRP = () => {
    const [formData, setFormData] = useState({
        sourceAddress: '',
        secret: '',
        destinationAddress: '',
        amount: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/ripple/sendXRP', formData);
            alert('Transaction Successful: ' + JSON.stringify(response.data));
        } catch (error) {
            alert('Error: ' + error.response.data);
        }
    }

    return (
        <div>
            <h2>Send XRP</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="sourceAddress" placeholder="Source Address" onChange={handleChange} required />
                <input type="password" name="secret" placeholder="Secret" onChange={handleChange} required />
                <input type="text" name="destinationAddress" placeholder="Destination Address" onChange={handleChange} required />
                <input type="text" name="amount" placeholder="Amount" onChange={handleChange} required />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default SendXRP;
