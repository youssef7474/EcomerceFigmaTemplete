import React from "react";
import styles from "./NewCatigories.module.css";
import firstImg from "../../../assets/imges/Frame 1.png";
import secondImg from "../../../assets/imges/Frame 2.png";
import thirdImg from "../../../assets/imges/Frame 3.png";

const NewCatigories = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <div className="conatnier">
        <div className={styles.cardContanier}>
          <div className={styles.card}>
            <img src={firstImg} alt="p"></img>
            <div className={styles.absoluteDiv}>
                <h1 >New Arrivals</h1>
                <p>SHOP THE LATEST</p>
            </div>
          </div>
          <div className={styles.card}>
            <img src={secondImg} alt="p"></img>
            <div className={styles.absoluteDiv}>
                <h1 >Best-Sellers</h1>
                <p>SHOP YOUR FAVORITES</p>
            </div>
          </div>
          <div className={styles.card}>
            <img src={thirdImg} alt="p"></img>
            <div className={styles.absoluteDiv}>
                <h1 >The Holiday Outfit</h1>
                <p>SHOP OCCASION</p>
            </div>
          </div>

    
          
      
        </div>
      </div>
    </div>
  );
};

export default NewCatigories;
