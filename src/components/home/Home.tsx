import React from "react";
import "./Home.css";
import { Button, Typography } from "@mui/material";
import Home2 from "./Home2";

const Home = () => {
  return (
    <div className="home">
      <Typography
        className="welcomeText"
        variant="h1"
        sx={{
          position: "absolute",
          color: "#FF6600",
          top: 277,
          left: 1069,
          fontSize: 25,
          fontFamily: "JosefinSans-Bold",
          textTransform: "uppercase",
        }}
      >
        Welcome To
      </Typography>

      <Typography
        className="brandText"
        variant="h2"
        sx={{
          color: "white",
          top: 305,
          left: 1070,
          width: 307,
          height: 128,
          //   fontSize: 96.57,
          fontFamily: "serif",
          textTransform: "uppercase",
        }}
      >
        District Auto Rental
      </Typography>
      <Typography
        // className="brandText"
        variant="body1"
        sx={{
          position: "absolute",
          color: "white",
          top: 553,
          left: 1069,
          width: 500,
        }}
      >
        Welcome to District Auto Rental, your go-to destination for versatile
        car rentals! Calling all Uber and DoorDash drivers, as well as
        individuals seeking private transportation solutions, we cater to all
        your needs. Explore our fleet and reserve your vehicle today for a
        seamless driving experience.
      </Typography>

      <Button
        variant="outlined"
        sx={{
          color: "#white",
          top: 788,
          left: 1069,
          borderColor: "#FF6600",
        }}
      >
        View More
      </Button>
      <Home2 />
    </div>
  );
};

export default Home;
