// Task Controller - Handles all business logic for task operations
const Task = require('../models/Task');

// @desc    Get all tasks
// @route   GET /api/tasks
// @access  Public
const getTasks = async (req, res) => {
  try {
    // Fetch all tasks from database, sorted by creation date (newest first)
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create new task
// @route   POST /api/tasks
// @access  Public
const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    // Validate required fields
    if (!title || !description) {
      return res.status(400).json({ message: 'Please provide title and description' });
    }

    // Create new task in database
    const task = await Task.create({
      title,
      description,
      status: status || 'pending',
    });

    res.status(201).json(task);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ message: error.message, error: error.toString() });
  }
};

// @desc    Update task
// @route   PUT /api/tasks/:id
// @access  Public
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    // Find task by ID and update with new data
    const task = await Task.findByIdAndUpdate(id, req.body, {
      new: true, // Return updated document
      runValidators: true, // Run schema validators
    });

    // Check if task exists
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete task
// @route   DELETE /api/tasks/:id
// @access  Public
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete task by ID
    const task = await Task.findByIdAndDelete(id);

    // Check if task exists
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ message: 'Task deleted successfully', id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
