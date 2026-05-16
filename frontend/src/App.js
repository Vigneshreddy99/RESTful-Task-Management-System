// Main App Component
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './components/Navbar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

// Base URL for API requests
const API_URL = 'http://localhost:5000/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  // Fetch all tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  // Fetch all tasks from backend
  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      toast.error('Failed to fetch tasks');
      console.error('Error fetching tasks:', error);
    }
  };

  // Create new task
  const createTask = async (taskData) => {
    try {
      const response = await axios.post(API_URL, taskData);
      setTasks([response.data, ...tasks]);
      toast.success('Task created successfully!');
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Failed to create task';
      toast.error(errorMsg);
      console.error('Error creating task:', error.response?.data || error.message);
    }
  };

  // Update existing task
  const updateTask = async (id, taskData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, taskData);
      setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
      setEditingTask(null);
      toast.success('Task updated successfully!');
    } catch (error) {
      toast.error('Failed to update task');
      console.error('Error updating task:', error);
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
      toast.success('Task deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete task');
      console.error('Error deleting task:', error);
    }
  };

  // Handle edit button click
  const handleEdit = (task) => {
    setEditingTask(task);
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingTask(null);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskForm
          createTask={createTask}
          updateTask={updateTask}
          editingTask={editingTask}
          cancelEdit={cancelEdit}
        />
        <TaskList tasks={tasks} onEdit={handleEdit} onDelete={deleteTask} />
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
