import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [newTask, setNewTask] = useState("");
  const [newCategory, setNewCategory] = useState("");

  // Fetch tasks from backend
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/tasks");
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  // Handle new task submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = {
      title: newTask,
      category: newCategory || "General",
      completed: false,
    };
    try {
      const response = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });
      const createdTask = await response.json();
      setTasks((prevTasks) => [...prevTasks, createdTask]);
      setNewTask("");
      setNewCategory("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Filter tasks by selected category
  const filteredTasks = selectedCategory
    ? tasks.filter((task) => task.category === selectedCategory)
    : tasks;

  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Task Board
      </Typography>

      {/* Add Task Form */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <TextField
          label="Task Title"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          required
          variant="outlined"
          sx={{ minWidth: "300px" }}
        />
        <TextField
          label="Category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          variant="outlined"
          sx={{ minWidth: "300px" }}
        />
        <Button type="submit" variant="contained" color="primary">
          Add Task
        </Button>
      </Box>

      {/* Filter by Category */}
      <Box sx={{ marginBottom: "20px", textAlign: "center" }}>
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          displayEmpty
          variant="outlined"
          sx={{ minWidth: "200px" }}
        >
          <MenuItem value="">All Categories</MenuItem>
          <MenuItem value="Work">Work</MenuItem>
          <MenuItem value="Personal">Personal</MenuItem>
          <MenuItem value="General">General</MenuItem>
        </Select>
      </Box>

      {/* Display Tasks */}
      <Grid container spacing={2}>
        {filteredTasks.map((task) => (
          <Grid item xs={12} sm={6} md={4} key={task._id}>
            <Card
              sx={{
                backgroundColor: task.completed ? "#d3ffd3" : "#fff",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {task.category || "General"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TaskBoard;
