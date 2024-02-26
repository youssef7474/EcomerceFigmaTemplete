import React, { useEffect, useState } from "react";
import logo from "../../assets/imges/Logo.png";
import card from "../../assets/icons/ShoppingCartSimple.svg";
import search from "../../assets/icons/MagnifyingGlass.svg";
import user from "../../assets/icons/User.svg";
import styles from "./Header.module.css";
import { FaBars } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const [buttonState, SetButtonState] = useState(false);


  return (
    <>
      <div className={styles.HeaderDiv}>
        <div className={styles.navsLinks}>
          <NavLink to="/" end>
            <div>Home</div>
          </NavLink>
          <NavLink to="/store">
            <div>Stores</div>
          </NavLink>
          <NavLink to="/blog">
            <div>Blog</div>
          </NavLink>
          <NavLink to="/About">
            <div>About</div>
          </NavLink>
        </div>

        <div>
          <img src={logo} alt="p" className={styles.logoImg}></img>
        </div>

        <div className={styles.iconsDiv}>
          <img src={card} alt="p"></img>
          <img src={search} alt="p"></img>
          <img src={user} alt="p"></img>
        </div>

        <div
          style={{ fontSize: "25px", cursor: "pointer" }}
          className={styles.responsiveButton}
          onClick={() => SetButtonState(!buttonState)}
        >
          <FaBars size={18} />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          display: buttonState ? "block" : "none",
          paddingBottom: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            paddingTop: "15px",
            gap: "5px",
          }}
        >
          <NavLink to="/" end>
            <div onClick={()=>SetButtonState(false)}>Home</div>
          </NavLink>
          <NavLink to="/store">
            <div onClick={()=>SetButtonState(false)}>Stores</div>
          </NavLink>
          <NavLink to="/blog">
            <div onClick={()=>SetButtonState(false)}>Blog</div>
          </NavLink>
          <NavLink to="/About">
            <div onClick={()=>SetButtonState(false)}>About</div>
          </NavLink>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginTop: "15px",
          }}
        >
          <img src={card} alt="p"></img>
          <img src={search} alt="p"></img>
          <img src={user} alt="p"></img>
        </div>
      </div>
    </>
  );
};

export default Header;
