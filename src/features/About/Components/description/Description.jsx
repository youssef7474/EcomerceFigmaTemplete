import React from "react";
import styles from "./Description.module.css"

const Description = () => {
  return (
    <div>
      <div
        className={styles.textContanier}
      >
        <div className={styles.DescriptionText} >
          At Everlane, we want the right choice to be as easy as putting on a
          great T-shirt. That’s why we partner with the best, ethical factories
          around the world. Source only the finest materials. And share those
          stories with you—down to the true cost of every product we make. It’s
          a new way of doing things. We call it Radical Transparency.
        </div>
      </div>
    </div>
  );
};

export default Description;
