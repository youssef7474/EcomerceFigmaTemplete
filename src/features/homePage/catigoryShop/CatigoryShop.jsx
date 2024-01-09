import React from 'react'
import styles from "./CatigoryShop.module.css"
import img1 from "../../../assets/imges/image.png"
import img2 from "../../../assets/imges/image (1).png"
import img3 from "../../../assets/imges/image (2).png"
import img4 from "../../../assets/imges/image (3).png"
import img5 from "../../../assets/imges/image (4).png"
import img6 from "../../../assets/imges/image (5).png"



const CatigoryShop = () => {
  return (
    <div style={{marginTop:"50px"}}>
        <div className='conatnier'>
            <h1 style={{fontSize:"25px",textAlign:"center",fontWeight:"300"}}>Shop by Category</h1>
            <div className={styles.CardContanier}>
                <div>
                    <img src={img1} alt='p' ></img>
                    <p>SHIRTS</p>
                </div>
                <div >
                    <img src={img2} alt='p' ></img>
                    <p>DENIM</p>
                </div>
                <div >
                    <img src={img3} alt='p' ></img>
                    <p>TEES</p>
                </div>
                <div >
                    <img src={img4} alt='p' ></img>
                    <p>PANTS</p>
                </div>
                <div >
                    <img src={img5} alt='p' ></img>
                    <p>SWEATERS</p>
                </div>
                <div >
                    <img src={img6} alt='p' ></img>
                    <p>OUTERWEAR</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CatigoryShop
