import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to Taskly
      </Typography>
      <Typography variant="h5" gutterBottom>
        Your smart solution to manage tasks efficiently!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        component={Link}
        to="/tasks"
        sx={{ marginTop: "20px" }}
      >
        Go to Task Board
      </Button>
    </Box>
  );
};

export default Home;
