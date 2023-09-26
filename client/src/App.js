import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './pages/Navbar';
import './App.css';
import CheckBalance from './pages/CheckBalance';
import SendXRP from './pages/SendXRP';
import MonitorTransaction from './pages/MonitorTransaction';
import TransactionHistory from './pages/TransactionHistory';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/sign-up" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/check-balance" element={<CheckBalance />} />
                    <Route path="/send-xrp" element={<SendXRP />} />
                    <Route path="/monitor-transaction" element={<MonitorTransaction />} />
                    <Route path="/transaction-history" element={<TransactionHistory />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
