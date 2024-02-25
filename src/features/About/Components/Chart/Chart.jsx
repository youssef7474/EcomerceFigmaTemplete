import React from 'react'
import styles from "./Chart.module.css"
import chart from "../../../../assets/imges/About/chart.png"

const Chart = () => {
  return (
    <div>
    <div className={styles.contanier}>
    <div >
        <img src={chart} alt='p'  ></img>
    </div>
    <div className={styles.textContanier}>
        <p>OUR PRICES</p>
        <h1>Radically Transparent.</h1>
        <p >We believe our customers have a right to know how much their clothes cost to make. We reveal the true costs behind all of our products—from materials to labor to transportation—then offer them to you, minus the traditional retail markup.</p>
    </div>
</div>
    </div>
  )
}

export default Chart
