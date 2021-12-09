

import React from 'react'

import TextField from '@mui/material/TextField'
import Box from "@mui/material/Box";
import Button from '@mui/material/Button'

function LoginForm() {
    return (
        <Box>
            <TextField>Email</TextField>
            <TextField>Login</TextField>
            <Button variant="text" color="primary">
                login
              </Button>

        </Box>
    )

        
}

export default LoginForm
