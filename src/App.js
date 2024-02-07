import React from 'react'
import Header from './layout/Header/Header'
import Landing from './features/homePage/LandingSection/Landing'
import CatigoryShop from './features/homePage/catigoryShop/CatigoryShop'
import NewCatigories from './features/homePage/newCatigories/NewCatigories'
import SecondLanding from './features/homePage/SecondLanding/SecondLanding'
import SliderOne from './features/homePage/SliderOne/SliderOne'
import SliderTwo from './features/homePage/SliderTwo/SliderTwo'
import Cotton from './features/homePage/Cotton/Cotton'
import "./App.css"
import Footer from './layout/Footer/Footer'
const App = () => {
  return (
    <div >
    <h1>test fix bug</h1>
      <Header/>
      <Landing/>
      <CatigoryShop/>
      <NewCatigories/>
      <SecondLanding/>
      <SliderOne/>
      <SliderTwo/>
      <Cotton/>
      <Footer/>
    </div>
  )
}

export default App
