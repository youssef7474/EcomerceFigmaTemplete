import React from 'react'
import styles from "./Cotton.module.css"
import cottonone from "../../../assets/imges/cotton.png"
import cottontwo from "../../../assets/imges/cotton2.png"
const Cotton = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <div className="conatnier" >
      <div className={styles.cardContanier}>
        <div className={styles.card}>
            <p>Our Holiday Gift Picks</p>
            <img src={cottonone} alt='p'></img>
            <p>The best presents for everyone on your list.</p>
            <div style={{paddingBottom:"10px",borderBottom:"1px solid black",width:"fit-content"}}>Read More</div>
        </div>
        <div className={styles.card}>
            <p>Cleaner Fashion</p>
            <img src={cottontwo} alt='p'></img>
            <p>See the sustainability efforts behind each of our products.</p>
            <div style={{paddingBottom:"10px",borderBottom:"1px solid black",width:"fit-content"}}>Learn More</div>

        </div>
      </div>
      </div>
    </div>
  )
}

export default Cotton
