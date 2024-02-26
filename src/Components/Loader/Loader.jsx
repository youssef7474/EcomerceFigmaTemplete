import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div class="loadingspinner">
        <div id="square1"></div>
        <div id="square2"></div>
        <div id="square3"></div>
        <div id="square4"></div>
        <div id="square5"></div>
      </div>
      All rights are reserved To &nbsp;
      <span style={{ color: "black", fontWeight: "bold" }}>
        YOUSSEF MOHAMED
      </span>
    </div>
  );
};

export default Loader;
