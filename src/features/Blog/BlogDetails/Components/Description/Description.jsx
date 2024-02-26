import React from 'react'
import icon1 from "../../../../../assets/imges/blogDetails/icons/facebook.png"
import icon2 from "../../../../../assets/imges/blogDetails/icons/linkedin.png"
import icon3 from "../../../../../assets/imges/blogDetails/icons/twitter.png"
import img from "../../../../../assets/imges/blogDetails/image.png"
import styles from "./Description.module.css"
const Description = () => {
  return (
    <div style={{marginTop:"50px"}}>
      <div className="conatnier">
        <div  className={styles.contanier} >
            <div>
                <img src={icon1} alt='p'></img>
                <img src={icon2} alt='p'></img>
                <img src={icon3} alt='p'></img>
            </div>
            <div style={{fontSize:"22px",fontWeight:"bold"}}>
                In a season dominated by dark hues, redefine your winter wardrobe with the timeless elegance of winter whites. Whether top-to-toe white outfits, tonal mixing-and-matching, or a key white piece (or two), give your style a breath of fresh air with this list of winter white closet essentials.
            </div>
        </div>
        <div className={styles.imgContanier}>
            <img src={img} alt='p' style={{width:"100%"}}></img>
        </div>
      </div>
    </div>
  )
}

export default Description
