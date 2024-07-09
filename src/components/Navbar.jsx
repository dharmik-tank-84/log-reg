import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Geek-shop
            </Typography>
            <Button
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b" : "" };
              }}
              component={NavLink}
              to="/"
              sx={{ color: "white", textTransform: "none" }}
            >
              Home
            </Button>
            <Button
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b" : "" };
              }}
              component={NavLink}
              to="/contact"
              sx={{ color: "white", textTransform: "none" }}
            >
              Contact
            </Button>
            <Button
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b" : "" };
              }}
              component={NavLink}
              to="/login"
              sx={{ color: "white", textTransform: "none" }}
            >
              Login/Registration
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
