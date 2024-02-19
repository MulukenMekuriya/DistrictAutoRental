import React from "react";
import "./Home.css";
import { Box, Button, Typography } from "@mui/material";

const Home2 = () => {
  return (
    <div style={{ backgroundColor: "#222831" }}>
      <Typography
        variant="h4"
        style={{ color: "white", top: 1118, left: 142, position: "absolute" }}
      >
        New
      </Typography>
      <Typography
        variant="h3"
        style={{ color: "white", top: 1171, left: 142, position: "absolute" }}
      >
        Trending Vehicles
      </Typography>
      <Typography
        variant="h5"
        style={{
          color: "white",
          top: 1245,
          left: 1500,
          position: "absolute",
          textTransform: "uppercase",
        }}
      >
        Rent Our Cars
      </Typography>
      <div className="firstVehicle" style={{ left: "2.5%" }}>
        <Typography
          variant="h4"
          style={{
            fontFamily: "serif",
            position: "absolute",
            color: "white",
            top: 400,
            left: "20%",
            textTransform: "uppercase",
          }}
        >
          For Uber
        </Typography>
      </div>
      <div className="secondVehicle" style={{ left: "26.25%" }}>
        <Typography
          variant="h4"
          style={{
            fontFamily: "serif",
            position: "absolute",
            color: "white",
            top: 400,
            left: "20%",
            textTransform: "uppercase",
          }}
        >
          For Doordash
        </Typography>
      </div>
      <div className="thirdVehicle" style={{ left: "50%" }}>
        <Typography
          variant="h4"
          style={{
            fontFamily: "serif",
            position: "absolute",
            color: "white",
            top: 400,
            left: "20%",
            textTransform: "uppercase",
          }}
        >
          For Personal
        </Typography>
      </div>
      <div className="fourthehicle" style={{ left: "74%" }}>
        <Typography
          variant="h4"
          style={{
            fontFamily: "serif",
            position: "absolute",
            color: "white",
            top: 400,
            left: "30%",
            textTransform: "uppercase",
          }}
        >
          $200/Week
        </Typography>
      </div>
      <div>
        <Box
          style={{
            position: "absolute",
            color: "white",
            top: 2233,
            left: 151,
            width: 671,
            height: 649,
            backgroundColor: "#959DA845",
          }}
        >
          <div className="home3Vehicle" style={{ top: 200, left: 200 }}></div>
          <Typography
            variant="h5"
            style={{
              fontFamily: "serif",
              position: "absolute",
              color: "white",
              top: 50,
              left: 20,
              textTransform: "uppercase",
            }}
          >
            nissan rogue
          </Typography>
          <Typography
            variant="h6"
            style={{
              fontFamily: "serif",
              position: "absolute",
              color: "white",
              top: 80,
              left: 20,
            }}
          >
            Automatic, 2010
          </Typography>
          <Typography
            variant="h5"
            style={{
              fontFamily: "serif",
              position: "absolute",
              color: "white",
              top: 110,
              left: 20,
              textTransform: "uppercase",
            }}
          >
            $150/week
          </Typography>
        </Box>
        <Typography
          variant="h4"
          style={{
            fontFamily: "serif",
            position: "absolute",
            color: "white",
            top: 2234,
            left: 1120,
            textTransform: "uppercase",
          }}
        >
          BEST OFFER
        </Typography>
        <Button
          sx={{
            top: 2527,
            left: 1114,
            width: 221,
            height: 78,
            background: "#FF6600",
            borderRadius: 16,
            color: "white",
            fontSize: 18,
          }}
        >
          View Offers
        </Button>
      </div>
    </div>
  );
};

export default Home2;
