import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function LoginForm() {
  return (
    <Box>
      <Formik
        initialValues={{
          email: "test@test.com",
          password: "testpass",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("invalid email")
            .max(255)
                .required("required"),
            password: Yup.string().min(4, '4 characters required').max(255).required('required')
        })}
        onSubmit={(value, { setErrors, setStatus, setSubmitting }) => {
          try {
            setStatus({ success: true });
            setSubmitting(false);
          } catch (err) {
            console.log(err);
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({
          errors,
          values,
          handleSubmit,
          handleBlur,
          handleChange,
          isSubmitting,
          touched,
        }) => (
          //   TODO:57:10

          <form noValidate onSubmit={handleSubmit}>
            <TextField
              error={Boolean(touched.email && errors.email)}
              onBlur={handleBlur}
              onChange={handleChange}
              helperText={touched.email && errors.email}
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
                      {/*---------------Password-------------*/}
            <TextField
              error={Boolean(touched.email && errors.email)}
              onBlur={handleBlur}
              onChange={handleChange}
              helperText={touched.email && errors.email}
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
            <Button
              disabled={isSubmitting}
              variant="text"
              margin="normal"
              color="primary"
            >
              login
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default LoginForm;
