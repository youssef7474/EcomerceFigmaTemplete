import React from 'react'
import styles from "./DesignLast.module.css"
import Img from "../../../../assets/imges/About/image3.png"
import Img2 from "../../../../assets/imges/About/image4.png"

const DesignLast = () => {
  return (
    <div style={{marginTop:"-5px"}}>
        <div className={styles.contanier}>
            <div style={{paddingLeft:"50px"}}>
                <p>OUR QUALITY</p>
                <h1 style={{width:"150px",fontWeight:"400"}}>Designed
                to last.</h1>
                <p>At Everlane, we’re not big on trends. We want you to wear our pieces for years, even decades, to come. That’s why we source the finest materials and factories for our timeless products— like our Grade-A cashmere sweaters, Italian shoes, and Peruvian Pima tees.</p>
            </div>
            <div>
                <img src={Img} alt='p'></img>
            </div>
        </div>

        <div style={{width:"100%"}}>
        <img src={Img2} alt='p' style={{width:"100%"}}></img>
      </div>
    </div>
  )
}

export default DesignLast
