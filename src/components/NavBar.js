import * as React from "react";
import { NavLink } from "react-router-dom";
import LoginForm from "./LoginForm";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";


import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";

const pages = ["Students", "Staff", "Houses" , "Login"];



const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
    <AppBar position="static">
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
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

            <Box sx={{ flexGrow: 0 }}>
            {/* onClick={handleOpen} */}
            <Button sx={{ my: 2, color: "white" }} onClick={handleOpen} > 
              LOGIN
            </Button>
          </Box>
          {/* 40:08 */}
          <Box sx={{ flexGrow: 0 }}>
            <Button sx={{ my: 2, color: "white" }}>
              <NavLink to="/login">LOGIN</NavLink>
            </Button>
          </Box>
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
