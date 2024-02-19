import React from "react";
import "../assets/mask-group-1@2x.png";

const SingleVehicleImage = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/mask-group-1@2x.png)",
        backgroundSize: "contain",
        position: "absolute",
        top: 1366,
        width: 300,
        height: 517,
      }}
    >
      MERCEDES BENZ
    </div>
  );
};

export default SingleVehicleImage;
