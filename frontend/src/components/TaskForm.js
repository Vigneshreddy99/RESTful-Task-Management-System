// TaskForm Component - Form for creating and editing tasks
import React, { useState, useEffect } from 'react';
import './TaskForm.css';

const TaskForm = ({ createTask, updateTask, editingTask, cancelEdit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'pending',
  });

  // Update form when editing task changes
  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title,
        description: editingTask.description,
        status: editingTask.status,
      });
    }
  }, [editingTask]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.title || !formData.description) {
      alert('Please fill in all fields');
      return;
    }

    // Create or update task
    if (editingTask) {
      updateTask(editingTask._id, formData);
    } else {
      createTask(formData);
    }

    // Reset form
    setFormData({
      title: '',
      description: '',
      status: 'pending',
    });
  };

  // Handle cancel button
  const handleCancel = () => {
    cancelEdit();
    setFormData({
      title: '',
      description: '',
      status: 'pending',
    });
  };

  return (
    <div className="task-form-container">
      <h2>{editingTask ? 'Edit Task' : 'Create New Task'}</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label htmlFor="title">Task Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter task title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter task description"
            rows="4"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn btn-primary">
            {editingTask ? 'Update Task' : 'Create Task'}
          </button>
          {editingTask && (
            <button type="button" className="btn btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
