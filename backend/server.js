// Main Server File - Entry point for backend application
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB Database
connectDB();

// Initialize Express application
const app = express();

// Middleware Configuration
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies

// API Routes
app.use('/api/tasks', taskRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Task Management API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
