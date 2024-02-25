import React from 'react'
import img1 from "../../../../assets/imges/About/image(0).png"
import img2 from "../../../../assets/imges/About/image (1).png"
import img3 from "../../../../assets/imges/About/image (2).png"
import styles from "./More.module.css"


const More = () => {
  return (
    <div style={{marginTop:"50px"}}>
    <div className='conatnier'>
        <div className={styles.moreContanier}>
            <h1>More to Explore</h1>
            <div className={styles.cardContainer}>
                <div>
                    <img src={img1} alt='p'></img>
                    <p>Our Products</p>
                </div>
                <div>
                    <img src={img2} alt='p'></img>
                    <p>Our Stores</p>
                </div>
                <div>
                    <img src={img3} alt='p'></img>
                    <p>Careers</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default More
