import Header from '../../../layout/Header/Header'
import Footer from '../../../layout/Footer/Footer'
import SliderOne from '../Components/SliderOne/SliderOne'
import SliderTwo from '../Components/SliderTwo/SliderTwo'
import Cotton from '../Components/Cotton/Cotton'
import Landing from '../Components/LandingSection/Landing'
import CatigoryShop from '../Components/catigoryShop/CatigoryShop'
import NewCatigories from '../Components/newCatigories/NewCatigories'
import SecondLanding from '../Components/SecondLanding/SecondLanding'

const HomePage = () => {
  return (
    <div>
 
    
    <Landing/>
    <CatigoryShop/>
    <NewCatigories/>
    <SecondLanding/>
    <SliderOne/>
    <SliderTwo/>
    <Cotton/>


    </div>
  )
}

export default HomePage
