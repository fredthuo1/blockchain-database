const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const rippleRoutes = require('./routes/rippleRoutes');
const errorHandler = require('./middleware/errorMiddleware');
const helmet = require('helmet');
const enforce = require('express-sslify');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Morgan Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Database connection
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());  // Adjust configuration based on your needs
app.use(helmet());
if (process.env.USE_HTTPS_ENFORCE) {
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

// Routes
app.use('/api/users', userRoutes);
app.use('/api/ripple', rippleRoutes);

// Error Handler - should come after routes
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
