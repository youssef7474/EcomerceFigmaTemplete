import React from 'react'
import LandingCompo from '../Components/LandingCompo/LandingCompo'
import Description from '../Components/description/Description'
import OurFactories from '../Components/OurFactories/OurFactories'
import DesignLast from '../Components/DesignLast/DesignLast'
import Chart from '../Components/Chart/Chart'
import More from '../Components/More/More'

const About = () => {
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
