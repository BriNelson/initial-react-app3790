import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useIdentityContext } from "react-netlify-identity-gotrue";
import LoginForm from "./LoginForm";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

import Button from "@mui/material/Button";


import Modal from "@mui/material/Modal";



const ResponsiveAppBar = () => {
  

 


  const [open, setOpen] = React.useState(false);
  
  const handleClose = () => setOpen(false);
  const identity = useIdentityContext();
  const navigate = useNavigate()
  const handleSignUp = () => { navigate("/signUp") };
  const handleStudents = () => { navigate("/congress")};

  return (
    <Box>
      <AppBar position="static"  sx={{

    backgroundColor: 'black',
  }}>
        <Container maxWidth="100%">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={handleStudents}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                students
              </Button>
              <Button
                onClick={handleSignUp}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Staff
              </Button>
              
              {!identity.user && !identity.provisionalUser && ( <Button
                onClick={handleSignUp}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                SignUp
              </Button>)}
             
            </Box>

            
            {/* 40:08 */}
            <Box sx={{ flexGrow: 0 }}>
              {identity.provisionalUser && (
              <Button sx={{ my: 2, color: "white" }}>
                <NavLink to="/login">LOGIN</NavLink>
                </Button>
                )}
            </Box>
            {identity.user && (
              <Button color='inherit' onclick={identity.logout}>logout</Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Modal open={open}>
        <LoginForm closeHandler={handleClose} />
      </Modal>
    </Box>
  );
};
export { ResponsiveAppBar };
