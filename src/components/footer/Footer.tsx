import React from "react";
import "./Footer.css";
import "../home/Home.css";
import { Box, Button, Typography } from "@mui/material";
import { Footer2 } from "./Footer2";

export const Footer = () => {
  return (
    <div>
      <Box
        sx={{
          position: "absolute",
          top: 3135,
          width: "100%",
          height: 751,
          background: "#707070",
          opacity: 0.28,
        }}
      ></Box>
      <Typography
        variant="h4"
        style={{
          position: "absolute",
          top: 3341,
          left: 145,
          color: "#FFFFFF",
          textTransform: "uppercase",
        }}
      >
        About
      </Typography>
      <Typography
        variant="h3"
        style={{
          position: "absolute",
          top: 3413,
          left: 145,
          color: "#FFFFFF",
          textTransform: "uppercase",
        }}
      >
        Disctrict Auto Rental
      </Typography>
      <div className="home3Vehicle" style={{ top: 3135, left: "50%" }}></div>
      <Typography
        variant="body1"
        style={{
          position: "absolute",
          top: 3651,
          left: 145,
          color: "#FFFFFF",
          width: "80%",
        }}
      >
        At Disctrict Auto Rental, we believe that every journey begins with a
        reliable and comfortable ride. Established with a passion for providing
        top-notch car rental services, Disctrict Auto Rental is your trusted
        partner for all your travel needs. Whether you’re exploring the city,
        embarking on a road trip, or attending a business meeting, we have the
        perfect vehicle to complement your travel experience.
      </Typography>
      <Box
        sx={{
          position: "absolute",
          top: 3900,
          width: "100%",
          height: 458,
          background: "black",
        }}
      ></Box>
      <Footer2 />
    </div>
  );
};
