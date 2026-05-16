// MongoDB Database Connection Configuration
const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Connect to MongoDB using connection string from environment variables
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`Database Name: ${conn.connection.name}`);
  } catch (error) {
    // Handle connection errors
    console.error(`Error: ${error.message}`);
    console.error('Make sure MongoDB is running!');
    console.error('For local MongoDB: Start MongoDB service');
    console.error('For MongoDB Atlas: Check your connection string in .env file');
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
