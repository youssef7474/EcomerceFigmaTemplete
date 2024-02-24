import React from 'react'
import employeImg from "../../../../assets/imges/About/image.png"
import styles from "./OurFactories.module.css"

const OurFactories = () => {
  return (
    <div style={{marginTop:"50px"}}>
    <div className={styles.contanier}>
        <div >
            <img src={employeImg} alt='p'  ></img>
        </div>
        <div className={styles.textContanier}>
            <h5>OUR FACTORIES</h5>
            <h2>Our ethical approach.</h2>
            <p >We spend months finding the best factories around the world—the same ones that produce your favorite designer labels. We visit them often and build strong personal relationships with the owners. Each factory is given a compliance audit to evaluate factors like fair wages, reasonable hours, and environment. Our goal? A score of 90 or above for every factory.</p>
        </div>
    </div>

    </div>
  )
}

export default OurFactories
