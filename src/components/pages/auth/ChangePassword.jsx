import { Alert, Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const ChangePassword = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get("password"),
      passwordConfirmation: data.get("passwordConfirmation"),
    };
    if (actualData.password && actualData.passwordConfirmation) {
      if (actualData.password === actualData.passwordConfirmation) {
        console.log(actualData);
        document.getElementById("password-change-form").reset();
        setError({
          status: true,
          msg: "password change successful",
          type: "sucess",
        });
      } else {
        setError({
          status: true,
          msg: "password and confirm password does not match",
          type: "error",
        });
      }
    } else {
      setError({
        status: true,
        msg: "all Fields are required",
        type: "error ",
      });
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          maxWidth: 600,
          mx: 4,
        }}
      >
        <h1>Change Password</h1>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
          id="password-change-form"
        >
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="New Password"
            type="password"
            id="password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="passwordConfirmation"
            label="Confirm New Password"
            type="password"
            id="passwordConfirmation"
          />
          <Box textAlign="center">
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, px: 5 }}
            >
              Update
            </Button>
          </Box>
          {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
        </Box>
      </Box>
    </>
  );
};

export default ChangePassword;
