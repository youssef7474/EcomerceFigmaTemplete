import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const LayOut = () => {
  return (
    <div>
      <Header />
        <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default LayOut;
