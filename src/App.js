import React from 'react'
import Header from './layout/Header/Header'
import Landing from './features/homePage/LandingSection/Landing'
import CatigoryShop from './features/homePage/catigoryShop/CatigoryShop'
import NewCatigories from './features/homePage/newCatigories/NewCatigories'
import SecondLanding from './features/homePage/SecondLanding/SecondLanding'
import SliderOne from './features/homePage/SliderOne/SliderOne'
import SliderTwo from './features/homePage/SliderTwo/SliderTwo'
import Cotton from './features/homePage/Cotton/Cotton'
import FooterKarim from './layout/Footer/FooterKarim'

const App = () => {
  return (
    <div >
      <Header/>
      <Landing/>
      <CatigoryShop/>
      <NewCatigories/>
      <SecondLanding/>
      <SliderOne/>
      <SliderTwo/>
      <Cotton/>
      <FooterKarim/>
    </div>
  )
}

export default App
