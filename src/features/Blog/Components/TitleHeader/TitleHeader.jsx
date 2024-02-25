import React from "react";
import styles from "./TitleHeader.module.css";

const TitleHeader = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <div className="conatnier">
      <div style={{borderTop:"7px solid black",maxWidth:"100%"}}>
        <h1 className={styles.Title}>everworld</h1>
        <div >
          <p>We’re on a mission to clean up a dirty industry</p>
          These are the people, stories, and ideas that will help us get there.
        </div>
        </div>
      </div>
    </div>
  );
};

export default TitleHeader;
