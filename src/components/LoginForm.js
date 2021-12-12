import React from "react";
import { useNavigate } from "react-router-dom"
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useIdentityContext } from "react-netlify-identity-gotrue";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function LoginForm(props) {
  const navigate = useNavigate()
  const identity = useIdentityContext();
  const { closeHandler } = props
  const handlePageClose = () => navigate("/welcome")
  
  return (
    <Box sx={style} >
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
          password: Yup.string()
            .min(4, "4 characters required")
            .max(255)
            .required("required"),
        })}
        onSubmit={async(value, { setErrors, setStatus, setSubmitting }) => {
          try {
            console.log('submit button working')
            setStatus({ success: true });
            setSubmitting(false);
            await identity.login({
              email: value.email,
              password: value.password,
            })
            .then(() => {
              handlePageClose();
              closeHandler();
            });

          } catch (err) {
            console.log(err);
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          } finally {
            handlePageClose()
            closeHandler()
            
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
          //   TODO:107 exit login

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
              error={Boolean(touched.password && errors.password)}
              onBlur={handleBlur}
              onChange={handleChange}
              helperText={touched.password && errors.password}
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
              type="submit"
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
