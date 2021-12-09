import React from "react";
import Formik from "formik"

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function LoginForm() {
  return (
      <Box>
          <Formik initialValues={{
              email: 'test@test.com',
              password: 'testpass'
          }}>

              {({ errors, values, handleSubmit }) => (
                  
               
                  <form noValidate onSubmit={handleSubmit}>
                      <TextField
                          variant="standard"
                          margin="normal"
                          label="Email"
                          name="email"
                          type="email"
                          value={values.email}
                          fullWidth
                      >
                          Email
                      </TextField>
                      <TextField
                          variant="standard"
                          margin="normal"
                          label="password"
                          name="password"
                          type="password"
                          value={values.password}
                          fullWidth
                      >
                          Login
                      </TextField>
                      <Button variant="text" margin="normal" color="primary">
                          login
                      </Button>
                  </form>
              )}
      </Formik>
    </Box>
  );
}

export default LoginForm;
