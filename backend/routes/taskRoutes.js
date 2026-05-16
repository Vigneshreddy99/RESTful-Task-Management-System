// Task Routes - Define API endpoints
const express = require('express');
const router = express.Router();
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

// Route: /api/tasks
router.route('/').get(getTasks).post(createTask);

// Route: /api/tasks/:id
router.route('/:id').put(updateTask).delete(deleteTask);

module.exports = router;
