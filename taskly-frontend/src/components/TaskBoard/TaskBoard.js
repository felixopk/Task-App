import React, { useState, useEffect } from "react";
import { Typography, Box, Card, CardContent, Grid, Select, MenuItem } from "@mui/material";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("http://localhost:5000/tasks");
      const data = await response.json();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const filteredTasks = selectedCategory
    ? tasks.filter((task) => task.category === selectedCategory)
    : tasks;

  return (
    <Box sx={{ padding: "20px", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Task Board
      </Typography>

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
                <Typography variant="h6" sx={{ textDecoration: task.completed ? "line-through" : "none" }}>
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
