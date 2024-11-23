import React from "react";
import { AppBar, Toolbar, Typography, Menu, MenuItem, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Taskly
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button
          color="inherit"
          onClick={handleMenuOpen}
        >
          Features
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem component={Link} to="/tasks" onClick={handleMenuClose}>
            Task Board
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>Other Feature</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
