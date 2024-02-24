import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import {SliderOnedata} from "../../../Data/SliderOne.js"
import styles from "./SliderOne.module.css"
const SliderOne = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

 

  return (
    <div style={{ marginTop: "50px" }}>
    <div className="conatnier">
    <div className={styles.HeaderContanier}>
    <h2>Everlane Favorites</h2>
    <p>Beautifully Functional. Purposefully Designed. Consciously Crafted.</p>
    </div>
    <div>
    <Carousel
    responsive={responsive}
    infinite={true}
    className={styles.slider}
    autoPlay={true} // Enable auto play
    autoPlaySpeed={3000}
  >
  {SliderOnedata.map((el) => {
    return (
      <div key={el.id} className={styles.card}>
        <div className={styles.imgContanier} >
          <img  src={el.img} alt='p'></img>
        </div>
        <div className={styles.discriptionContanier}>
          <p >{el.discription}</p>
          <p >{el.price}</p>
        </div>
        <p className={styles.text}>{el.text}</p>
      </div>
    );
  })}
  </Carousel>
    </div>
    </div>
    </div>
  )
}

export default SliderOne
