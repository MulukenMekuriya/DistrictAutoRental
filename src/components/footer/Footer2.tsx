import React from "react";
import "./Footer.css";
import "../home/Home.css";
import { Button, Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CopyrightIcon from "@mui/icons-material/Copyright";

export const Footer2 = () => {
  return (
    <div style={{ background: "#222831" }}>
      <div>
        <Typography
          variant="h5"
          style={{
            position: "absolute",
            top: 3974,
            left: 145,
            color: "#FFFFFF",
          }}
        >
          Company
        </Typography>
        <Button
          variant="text"
          style={{
            position: "absolute",
            top: 4023,
            left: 145,
            color: "#FFFFFF",
            textTransform: "capitalize",
          }}
        >
          Home
        </Button>
        <Button
          variant="text"
          style={{
            position: "absolute",
            top: 4070,
            left: 145,
            color: "#FFFFFF",
            textTransform: "capitalize",
          }}
        >
          Inventory
        </Button>
        <Button
          variant="text"
          style={{
            position: "absolute",
            top: 4115,
            left: 145,
            color: "#FFFFFF",
            textTransform: "capitalize",
          }}
        >
          About us
        </Button>
        <Button
          variant="text"
          style={{
            position: "absolute",
            top: 4162,
            left: 145,
            color: "#FFFFFF",
            textTransform: "capitalize",
          }}
        >
          Contact us
        </Button>
      </div>
      <div>
        <Typography
          variant="h5"
          style={{
            position: "absolute",
            top: 3974,
            left: 554,
            color: "#FFFFFF",
            textTransform: "capitalize",
          }}
        >
          Privacy
        </Typography>
        <Button
          variant="text"
          style={{
            position: "absolute",
            top: 4023,
            left: 554,
            color: "#FFFFFF",
            textTransform: "capitalize",
          }}
        >
          Terms of use
        </Button>
        <Button
          variant="text"
          style={{
            position: "absolute",
            top: 4070,
            left: 554,
            color: "#FFFFFF",
            textTransform: "capitalize",
          }}
        >
          Copyright
        </Button>
        <Button
          variant="text"
          style={{
            position: "absolute",
            top: 4115,
            left: 554,
            color: "#FFFFFF",
            textTransform: "capitalize",
          }}
        >
          Conditions
        </Button>
      </div>
      <div>
        <Typography
          variant="h5"
          style={{
            position: "absolute",
            top: 3974,
            left: 962,
            color: "#FFFFFF",
            textTransform: "capitalize",
          }}
        >
          Contact
        </Typography>
        <Button
          variant="text"
          style={{
            position: "absolute",
            top: 4023,
            left: 965,
            color: "#FFFFFF",
            textTransform: "capitalize",
          }}
        >
          <LocalPhoneIcon />
          202-322-9369
        </Button>
        <Button
          variant="text"
          style={{
            position: "absolute",
            top: 4070,
            left: 965,
            color: "#FFFFFF",
            textTransform: "capitalize",
          }}
        >
          <EmailIcon />
          DistrictAutoRental@gmail.com
        </Button>
        <Button
          variant="text"
          style={{
            position: "absolute",
            top: 4115,
            left: 965,
            color: "#FFFFFF",
            textTransform: "capitalize",
          }}
        >
          <PlaceIcon />
          Silver Spring, MD
        </Button>
      </div>
      <div>
        <Typography
          variant="h5"
          style={{
            position: "absolute",
            top: 3974,
            left: 1456,
            color: "#FFFFFF",
            textTransform: "capitalize",
          }}
        >
          Follow Us
        </Typography>
        <Button
          variant="text"
          style={{
            position: "absolute",
            top: 4023,
            left: 1456,
            color: "#FFFFFF",
            textTransform: "capitalize",
          }}
        >
          <TwitterIcon /> <InstagramIcon /> <FacebookIcon />
          <YouTubeIcon />
        </Button>
      </div>
      <div>
        <Typography
          variant="h5"
          style={{
            position: "absolute",
            top: 4289,
            left: 681,
            color: "#FFFFFF",
            textTransform: "capitalize",
          }}
        >
          <CopyrightIcon /> Copyright 2023 District Auto Rental LLC. All rights
          reserved.
        </Typography>
      </div>
    </div>
  );
};
