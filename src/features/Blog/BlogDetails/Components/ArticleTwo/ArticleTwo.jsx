import React from "react";
import styles from "./ArtcleTwo.module.css";
import img from "../../../../../assets/imges/blogDetails/image (1).png";
const ArticleTwo = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <div className="conatnier">
        <div className={styles.imgContanier}>
          <img src={img} alt="p" style={{ width: "100%" }}></img>
        </div>
        <div className={styles.card}>
          <h1>Textures and Layers</h1>
          <p>
            Winter fashion is all about layering, and white outfits provide the
            perfect base for playing with textures and layers. Start with your
            white turtleneck and experiment with different fabrics like wool,
            cashmere, and silk to add depth and interest to your look. A white
            silk blouse layered under a chunky knit sweater or a white wool
            skirt paired with a turtleneck creates a textural look that's both
            cozy and chic.
          </p>
        </div>
        <div className={styles.card}>
          <h1>Accessorize with Neutrals</h1>
          <p>
            When working with a predominantly white palette, neutrals become
            your best friends. From white leather Chelsea boots to off-white
            beanies mix in plenty of winter-ready accessories and shoes for
            those finishing outfit tonal touches. So, step into the season with
            confidence, and let your winter whites make a bold and beautiful
            statement. Shop our winter white edit here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleTwo;
