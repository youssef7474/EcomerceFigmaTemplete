import React from 'react'
import styles from "./Landing.module.css"
const Landing = () => {
  return (
    <div className={styles.landingDiv}>
    <div className={styles.divInside}>
      <h1 className={styles.headerTitle}>Your Cozy Era</h1>
      <p className={styles.HeaderPargraph}>Get peak comfy-chic with new winter essentials.</p>
      <div className={styles.LandingButton}>SHOP NOW</div>
    </div>
  </div>
  )
}

export default Landing
