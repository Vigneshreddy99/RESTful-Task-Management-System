// TaskList Component - Display list of all tasks
import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="task-list-container">
      <h2>All Tasks ({tasks.length})</h2>
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks available. Create your first task!</p>
      ) : (
        <div className="task-list">
          {tasks.map((task) => (
            <TaskItem key={task._id} task={task} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
