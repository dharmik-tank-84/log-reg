import { Alert, Box, Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {
    const navigate = useNavigate();
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            password: data.get("password"),
            conformPassword: data.get("conformPassword"),
        }
        if (actualData.password && actualData.conformPassword) {
            if (actualData.password === actualData.conformPassword) {
                console.log(actualData);
                document.getElementById("password-reset-form").reset();
                setError({ status: true, msg: 'Password Reset Succesfuly. Redirecting to Login Page...', type: 'success' })
                setTimeout(() => {
                    navigate("/login")
                }, 3000)
            }
            else {
                setError({ status: true, msg: 'Password and Confirm Password Does not Match', type: 'success' })
            }
        } else {
            setError({ status: true, msg: 'All Fields are Required', type: 'error' })
        }
    }
    return (
        <>
            <Grid container justifyContent="center">
                <Grid item sm={6} xs={12}>
                    <h1>Reset Password</h1>
                    <Box component="form" noValidate id="password-reset-form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
                        <TextField margin='normal' required fullWidth id='password' name='password' type='password' label="New Password" />
                        <TextField margin='normal' required fullWidth id='conformPassword' name='conformPassword' type='password' label="New Conform Password" />
                        <Box textAlign="center">
                            <Button type="submit" sx={{ mt: 3, mb: 2, px: 5 }} variant="contained">Save</Button>
                        </Box>
                        {
                            error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''
                        }
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default ResetPassword