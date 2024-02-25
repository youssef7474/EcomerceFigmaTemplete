import React from "react";
import styles from "./Stores.module.css";
import img1 from "../../../../assets/imges/store/image.png";
import img2 from "../../../../assets/imges/store/image (1).png";
import img3 from "../../../../assets/imges/store/image (2).png";
import img4 from "../../../../assets/imges/store/image (3).png";
import img5 from "../../../../assets/imges/store/image (4).png";
import img6 from "../../../../assets/imges/store/image (5).png";
import img7 from "../../../../assets/imges/store/image (6).png";
import img8 from "../../../../assets/imges/store/image (7).png";
import img9 from "../../../../assets/imges/store/image (8).png";

const Stores = () => {
  return (
    <>
    <div>
      <div className="conatnier">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h2>Stores</h2>
            <p>Find one of our 11 stores nearest you.</p>
          </div>
          <div className={styles.cardContanier}>
            <div className={styles.card}>
              <img src={img1} alt="p"></img>
              <p>SEATTLE</p>
              <h6>University Village</h6>
            </div>
            <div className={styles.card}>
              <img src={img2} alt="p"></img>
              <p>SAN FRANCISCO</p>
              <h6>Valencia Street, San Francisco</h6>
            </div>
            <div className={styles.card}>
              <img src={img3} alt="p"></img>
              <p>SAN FRANCISCO</p>
              <h6>Valencia Street, San Francisco</h6>
            </div>

            <div className={styles.card}>
              <img src={img4} alt="p"></img>
              <p>SAN FRANCISCO</p>
              <h6>Valencia Street, San Francisco</h6>
            </div>

            <div className={styles.card}>
              <img src={img5} alt="p"></img>
              <p>SAN FRANCISCO</p>
              <h6>Valencia Street, San Francisco</h6>
            </div>

            <div className={styles.card}>
              <img src={img6} alt="p"></img>
              <p>SAN FRANCISCO</p>
              <h6>Valencia Street, San Francisco</h6>
            </div>
            <div className={styles.card}>
              <img src={img7} alt="p"></img>
              <p>SAN FRANCISCO</p>
              <h6>Valencia Street, San Francisco</h6>
            </div>

            <div className={styles.card}>
              <img src={img8} alt="p"></img>
              <p>SAN FRANCISCO</p>
              <h6>Valencia Street, San Francisco</h6>
            </div>

            <div className={styles.card}>
              <img src={img9} alt="p"></img>
              <p>SAN FRANCISCO</p>
              <h6>Valencia Street, San Francisco</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  </>
  );
};

export default Stores;
