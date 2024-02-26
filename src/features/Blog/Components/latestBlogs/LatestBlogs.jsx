import React from "react";
import styles from "./LatestBlogs.module.css";
import img1 from "../../../../assets/imges/blog/image.png";
import img2 from "../../../../assets/imges/blog/image (1).png";
import img3 from "../../../../assets/imges/blog/image (2).png";
import img4 from "../../../../assets/imges/blog/image (3).png";
import img5 from "../../../../assets/imges/blog/image (4).png";
import img6 from "../../../../assets/imges/blog/image (5).png";
import { useNavigate } from "react-router-dom";

const LatestBlogs = () => {
  const navigate = useNavigate()
  return (
    <div style={{ marginTop: "50px" }}>
      <div className="conatnier">
        <h1>The Latest</h1>
        <div className={styles.blogContanier}>
          <div style={{ width: "300px" }} onClick={()=>navigate("5")}>
            <img src={img1} alt="p" style={{ width: "100%" }}></img>
            <h3>How To Style Winter Whites</h3>
            <div
              style={{
                border: "0.5px solid gray",
                width: "fit-content",
                padding: "4px 17px 4px 17px",
                borderRadius: "10px",
              }}
            >
              style
            </div>
          </div>
          <div style={{ width: "300px" }} onClick={()=>navigate("5")}>
            <img src={img2} alt="p" style={{ width: "100%" }}></img>
            <h3>How To Style Winter Whites</h3>
            <div
              style={{
                border: "0.5px solid gray",
                width: "fit-content",
                padding: "4px 17px 4px 17px",
                borderRadius: "10px",
              }}
            >
              style
            </div>
          </div>

          <div style={{ width: "300px" }} onClick={()=>navigate("5")}>
            <img src={img3} alt="p" style={{ width: "100%" }}></img>
            <h3>How To Style Winter Whites</h3>
            <div
              style={{
                border: "0.5px solid gray",
                width: "fit-content",
                padding: "4px 17px 4px 17px",
                borderRadius: "10px",
              }}
            >
              style
            </div>
          </div>

          <div style={{ width: "300px" }} onClick={()=>navigate("5")}>
            <img src={img4} alt="p" style={{ width: "100%" }}></img>
            <h3>How To Style Winter Whites</h3>
            <div
              style={{
                border: "0.5px solid gray",
                width: "fit-content",
                padding: "4px 17px 4px 17px",
                borderRadius: "10px",
              }}
            >
              style
            </div>
          </div>

          <div style={{ width: "300px" }} onClick={()=>navigate("5")}>
            <img src={img5} alt="p" style={{ width: "100%" }}></img>
            <h3>How To Style Winter Whites</h3>
            <div
              style={{
                border: "0.5px solid gray",
                width: "fit-content",
                padding: "4px 17px 4px 17px",
                borderRadius: "10px",
              }}
            >
              style
            </div>
          </div>

          <div style={{ width: "300px" }} onClick={()=>navigate("5")}>
            <img src={img6} alt="p" style={{ width: "100%" }}></img>
            <h3>How To Style Winter Whites</h3>
            <div
              style={{
                border: "0.5px solid gray",
                width: "fit-content",
                padding: "4px 17px 4px 17px",
                borderRadius: "10px",
              }}
            >
              style
            </div>
          </div>
        </div>

        <div className={styles.buttom} style={{marginTop:"50px"}}>
        Load more Articals
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
