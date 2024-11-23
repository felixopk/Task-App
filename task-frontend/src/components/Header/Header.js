import React from 'react';
import './Header.css'; // We'll style this later.

const Header = () => {
  return (
    <header className="header">
      <h1>Taskly</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/tasks">Tasks</a>
      </nav>
    </header>
  );
};

export default Header;

