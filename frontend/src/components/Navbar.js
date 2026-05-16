// Navbar Component - Application header
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">📝 Task Manager</h1>
        <p className="navbar-subtitle">Organize your daily tasks efficiently</p>
      </div>
    </nav>
  );
};

export default Navbar;
