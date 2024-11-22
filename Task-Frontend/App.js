import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TaskBoard from './components/TaskBoard/TaskBoard';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [category, setCategory] = useState('General');

  // Fetch tasks from the backend
  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:5000/tasks');
      if (!response.ok) {
        throw new Error(`Failed to fetch tasks: ${response.statusText}`);
      }
      const data = await response.json();
      setTasks(data); // Update the state with the fetched tasks
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Load tasks on component mount
  useEffect(() => {
    fetchTasks(); // Call fetchTasks here
  }, []);

  // Handle adding new tasks
  const handleAddTask = async () => {
    try {
      const response = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTask, description: '', category }),
      });
      if (!response.ok) {
        throw new Error(`Failed to add task: ${response.statusText}`);
      }
      const addedTask = await response.json();
      setTasks([...tasks, addedTask]);
      setNewTask('');
      setCategory('General'); // Reset category after adding
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div className="App">
      <Header />
      <TaskBoard tasks={tasks} />
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New Task"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
}

export default App;
