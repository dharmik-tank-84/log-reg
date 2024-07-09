import { Alert, Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    if (actualData.email && actualData.password) {
      console.log(actualData);
      document.getElementById("login-form").reset();
      setError({ status: true, msg: "Login Success", type: "success" });
      navigate("/dashboard");
    } else {
      setError({ status: true, msg: "All fields are required", type: "error" });
    }
  };
  return (
    <>
      <Box
        component="form"
        noValidate
        id="login-form"
        sx={{ mt: 1 }}
        onSubmit={handleSubmit}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          type="email"
          name="email"
          label="Email Address"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          name="password"
          type="password"
          label="Password"
        />
        <Box textAlign="center">
          <Button
            type="submit"
            sx={{ mt: 3, mb: 2, px: 5 }}
            variant="contained"
          >
            Login
          </Button>
        </Box>
        <NavLink to="/sendpasswordresetemail">Forgot Password</NavLink>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
      </Box>
    </>
  );
};

export default UserLogin;
