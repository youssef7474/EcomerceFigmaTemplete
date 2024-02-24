import React from 'react'
import styles from "./SecondLanding.module.css";

const SecondLanding = () => {
  return (
    <div className="conatnier" style={{marginTop:"50px"}}>
      <div className={styles.landingDiv}>
        <div className={styles.textContanier}>
            <h1>We’re on a Mission To Clean Up the Industry</h1>
            <p>Read about our progress in our latest Impact Report.</p>
            <div className={styles.Btn}>LEARN MORE</div>
        </div>
      </div>
    </div>
  )
}

export default SecondLanding
