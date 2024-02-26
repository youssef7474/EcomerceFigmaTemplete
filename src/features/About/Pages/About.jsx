import React from 'react'
import LandingCompo from '../Components/LandingCompo/LandingCompo'
import Description from '../Components/description/Description'
import OurFactories from '../Components/OurFactories/OurFactories'
import DesignLast from '../Components/DesignLast/DesignLast'
import Chart from '../Components/Chart/Chart'
import More from '../Components/More/More'
import useLoading from '../../../Hooks/useLoading'
import Loader from '../../../Components/Loader/Loader'

const About = () => {
  const loading=useLoading()

  if(loading){
    return(
      <div  className='LoaderContanier'>
        <Loader></Loader>
      </div>
    )
  }
  return (
    <div>
      <LandingCompo/>
      <Description/>
      <OurFactories/>
      <DesignLast/>
      <Chart/>
      <More/>
    </div>
  )
}

export default About
