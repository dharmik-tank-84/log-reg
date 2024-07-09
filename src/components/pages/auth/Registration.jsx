import { Alert, Box, Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    })
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            name: data.get("name"),
            email: data.get("email"),
            password: data.get("password"),
            conformPassword: data.get("conformPassword"),
            tc: data.get("tc"),
        }
        if (actualData.name && actualData.email && actualData.password && actualData.tc !== null) {
            if (actualData.password === actualData.conformPassword) {
                console.log(actualData);
                document.getElementById("registration-form").reset();
                setError({ status: true, msg: 'Registration Success', type: 'success' })
                navigate('/dashboard')
            }
            else {
                setError({ status: true, msg: 'Conform Password does not match', type: 'error' })
            }
        } else {
            setError({ status: true, msg: 'All fields are required', type: 'error' })
        }
    }
    return (
        <>
            <Box component="form" noValidate id="registration-form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
                <TextField margin='normal' required fullWidth id='name' type='text' name='name' label="Name" />
                <TextField margin='normal' required fullWidth id='email' type='email' name='email' label="Email Address" />
                <TextField margin='normal' required fullWidth id='password' name='password' type='password' label="Password" />
                <TextField margin='normal' required fullWidth id='conformPassword' name='conformPassword' type='password' label="Conform Password" />
                <FormControlLabel control={<Checkbox value="agree" color='primary' name='tc' id='tc' />} label="I agree to term and condition." />
                <Box textAlign="center">
                    <Button type="submit" sx={{ mt: 3, mb: 2, px: 5 }} variant="contained">Registration</Button>
                </Box>
                {
                    error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''
                }

            </Box>
        </>
    )
}

export default Registration