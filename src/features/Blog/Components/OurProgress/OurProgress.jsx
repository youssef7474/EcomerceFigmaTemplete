import React from "react";
import img1 from "../../../../assets/imges/blog/progress1.png";
import img2 from "../../../../assets/imges/blog/progress2.png";
import img3 from "../../../../assets/imges/blog/progress3.png";

import styles from "./OurProgress.module.css";

const OurProgress = () => {
  return (
    <div className="conatnier" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{display:"flex",flexDirection:"column",alignItems:"start"}}>
        <div>
          <h3>Our Progress</h3>
        </div>
        <div className={styles.cardContanier}>
          <div style={{ width: "300px" }}>
            <img src={img1} alt="p" style={{ width: "100%" }}></img>
            <h5>Carbon Commitment</h5>
          </div>
          <div style={{ width: "300px" }}>
            <img src={img2} alt="p" style={{ width: "100%" }}></img>
            <h5>Environmental Initiatives</h5>
          </div>
          <div style={{ width: "300px" }}>
            <img src={img3} alt="p" style={{ width: "100%" }}></img>
            <h5>Better Factories</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProgress;
