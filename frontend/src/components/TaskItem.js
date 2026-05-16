// TaskItem Component - Individual task card
import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onEdit, onDelete }) => {
  // Get status badge color
  const getStatusClass = (status) => {
    switch (status) {
      case 'completed':
        return 'status-completed';
      case 'in-progress':
        return 'status-in-progress';
      default:
        return 'status-pending';
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="task-item">
      <div className="task-header">
        <h3>{task.title}</h3>
        <span className={`status-badge ${getStatusClass(task.status)}`}>
          {task.status}
        </span>
      </div>
      <p className="task-description">{task.description}</p>
      <div className="task-footer">
        <span className="task-date">Created: {formatDate(task.createdAt)}</span>
        <div className="task-actions">
          <button className="btn-edit" onClick={() => onEdit(task)}>
            Edit
          </button>
          <button className="btn-delete" onClick={() => onDelete(task._id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
