import React from 'react'
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.Landing}>
        <div className="conatnier" style={{display:"flex",flexDirection:"column",justifyContent:"start",width:"100%"}}>
            <div >
                <div className={styles.Tag}>style</div>
                <div  className={styles.textcontanier}>
                    <h1 >Style</h1>
                    <h1 >How To Style Winter</h1>
                    <h1  >Whites</h1>
                </div>
                <p style={{color:"white",marginTop:"50px"}}>Redefine your winter wardrobe with the timeless elegance of winter whites with this style guide.</p>

            </div>
        </div>
    </div>
  )
}

export default Landing
