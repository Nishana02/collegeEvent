import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { IoIosSchool } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: "#000035" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <IoIosSchool />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            College Event Management
          </Typography>

          <Link to={"/"}>
            <Button
              color="inherit"
              style={{ color: "white", marginRight: "10px" }}
            >
              Home
            </Button>
          </Link>
          <Link to={"/events"}>
            <Button
              color="inherit"
              style={{ color: "white", marginRight: "10px" }}
            >
              Events
            </Button>
          </Link>

          <Link to={"/adminlogin"}>
            <Button
              color="inherit"
              style={{ color: "white", marginRight: "10px" }}
            >
              Admin
            </Button>
          </Link>

          <Link to={"/studentlogin"}>
            <Button
              color="inherit"
              style={{ color: "white", marginRight: "10px" }}
            >
              Student
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
