import React from 'react'
import styles from "./Slider.module.css";
import { TbHanger } from "react-icons/tb";

const Slider = () => {
  return (
    <div style={{marginTop:"50px"}}>
    <div className={styles.scrollingtextcontainer}>
    <div className={styles.scrollingtext} style={{fontWeight:"bold",fontSize:"22px",display:"flex",alignItems:"center",justifyContent:"center",gap:"15px"}}>

        KEEP IT CLEAN
        <TbHanger size={25}/>
        DO RIGHT BY PEOPLE
        <TbHanger size={25}/>
        KEEP IT CLEAN
        <TbHanger size={25}/>
        DO RIGHT BY PEOPLE
        <TbHanger size={25}/>
        KEEP IT CLEAN
        <TbHanger size={25}/>
    </div>
    </div> 
    </div>
  )
}

export default Slider
