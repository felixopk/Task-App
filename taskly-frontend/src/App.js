import React, { useState, useEffect } from "react";
import TaskBoard from "./components/TaskBoard/TaskBoard";

function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from backend
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("http://localhost:5000/tasks");
      const data = await response.json();
      setTasks(data);
    };

    fetchTasks();
  }, []);

  const toggleTaskCompletion = async (id) => {
    const updatedTasks = tasks.map((task) =>
      task._id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);

    // Optional: Send updated task status to backend
  };

  return (
    <div>
      <TaskBoard tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
    </div>
  );
}

export default App;
