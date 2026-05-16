// Task Model Schema Definition
const mongoose = require('mongoose');

// Define Task Schema with required fields
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a task title'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please add a task description'],
    },
    status: {
      type: String,
      enum: ['pending', 'in-progress', 'completed'],
      default: 'pending',
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model('Task', taskSchema);
