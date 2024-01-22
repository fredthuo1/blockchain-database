import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="navbar-brand">Blockchain Database</h2>
            <div className="navbar-links">
                <Link to="/sign-up" className="navbar-link">Signup</Link>
                <Link to="/login" className="navbar-link">Login</Link>
                <Link to="/send-xrp" className="navbar-link">Send XRP</Link>
                <Link to="/check-balance" className="navbar-link">Check Balance</Link>
                <Link to="/monitor-transaction" className="navbar-link">Monitor Transaction</Link>
                <Link to="/transaction-history" className="navbar-link">Transaction History</Link>
            </div>
        </nav>
    );
}

export default Navbar;