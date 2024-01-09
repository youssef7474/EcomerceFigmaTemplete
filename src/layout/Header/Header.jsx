import React, { useEffect, useState } from 'react'
import logo from "../../assets/imges/Logo.png"
import card from "../../assets/icons/ShoppingCartSimple.svg"
import search from "../../assets/icons/MagnifyingGlass.svg"
import user from "../../assets/icons/User.svg"
import styles from "./Header.module.css"
import { FaBars } from "react-icons/fa6";
const Header = () => {
  
  const [buttonState,SetButtonState]=useState(false)

 //console.log(buttonState)


  return (
    <>
    <div className={styles.HeaderDiv}>

     
      <div className={styles.navsLinks} >
        <div>Women</div>
        <div>Men</div>
        <div>About</div>
        <div>Everworld Stories</div>
      </div>
      

      <div>
        <img src={logo} alt='p' className={styles.logoImg}></img>
      </div>

      <div className={styles.iconsDiv}>
        <img src={card} alt='p'></img>
        <img src={search} alt='p'></img>
        <img src={user} alt='p'></img>
      </div>

      <div style={{fontSize:"25px" , cursor:"pointer"}} className={styles.responsiveButton} onClick={()=>SetButtonState(!buttonState)}>
        <FaBars  size={18}/>
      </div>

    </div>

    <div style={{backgroundColor:"white",width:"100%", display: buttonState ? 'block' : 'none' , paddingBottom:"15px"}} >
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",paddingTop:"15px",gap:"5px"}}>
        <div>Women</div>
        <div>Men</div>
        <div>About</div>
        <div>Everworld Stories</div>
      </div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",marginTop:"15px" }}>
      <img src={card} alt='p'></img>
      <img src={search} alt='p'></img>
      <img src={user} alt='p'></img>
    </div>
    </div>
    </>
  )
}

export default Header
