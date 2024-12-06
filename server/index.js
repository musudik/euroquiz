require('dotenv').config();
const express = require('express');
const cors = require('cors');
const emailRoutes = require('./routes/email');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Server is running' });
});

// Routes
app.use(emailRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Global Error Handler:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
  console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY ? 'Is set' : 'Not set');
}); 