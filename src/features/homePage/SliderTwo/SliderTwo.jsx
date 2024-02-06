import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { SliderTwoData } from '../../../Data/SliderTwo';
import styles from "./SliderTwo.module.css"
const SliderTwo = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div style={{ marginTop: "50px" }}>
    <div className="conatnier">
    <Carousel
    responsive={responsive}
    infinite={true}
    //className={styles.slider}
    autoPlay={true} // Enable auto play
    autoPlaySpeed={2000}
  >
  {SliderTwoData.map((el) => {
    return (
      <div  className={styles.card}>
        <div  className={styles.TextConatnier}>
          <p  className={styles.text}>{el.firstText}</p>
          <p className={styles.text}>{el.text}</p>
          <p style={{color:"#000000"}} className={styles.name}>{el.name}</p>
        </div>
        <div className={styles.imgContanier}>
        <img src={el.img} alt='p' ></img>
        </div>
      </div>
    );
  })}
  </Carousel>
    </div>
    </div>
  )
}

export default SliderTwo
