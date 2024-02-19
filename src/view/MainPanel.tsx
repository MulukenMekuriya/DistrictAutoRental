import React from "react";
import Header from "../components/header/Header";
import "../components/home/Home.css";
import Home from "../components/home/Home";
import { Footer } from "../components/footer/Footer";

const MainPanel = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default MainPanel;
