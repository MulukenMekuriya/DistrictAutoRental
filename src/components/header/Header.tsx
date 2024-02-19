import React from "react";
import "./Header.css";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <div className="header ">
      <img className="logo" src="dar-logo.png" alt="logo" />

      <Button
        variant="text"
        sx={{
          position: "absolute",
          color: "white",
          top: 46,
          left: "62%",

          fontFamily: "JosefinSans-Bold",
          textTransform: "uppercase",
        }}
      >
        Home
      </Button>

      <Button
        variant="text"
        sx={{
          position: "absolute",
          color: "white",
          top: 46,
          left: "72%",
          fontFamily: "JosefinSans-Bold",
          textTransform: "uppercase",
        }}
      >
        Inventory
      </Button>

      <Button
        variant="text"
        sx={{
          position: "absolute",
          color: "white",
          top: 46,
          left: "82%",
          fontFamily: "JosefinSans-Bold",
          textTransform: "uppercase",
        }}
      >
        About Us
      </Button>
    </div>
  );
};

export default Header;
