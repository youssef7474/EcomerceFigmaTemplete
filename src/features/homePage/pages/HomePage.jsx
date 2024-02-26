import SliderOne from '../Components/SliderOne/SliderOne'
import SliderTwo from '../Components/SliderTwo/SliderTwo'
import Cotton from '../Components/Cotton/Cotton'
import Landing from '../Components/LandingSection/Landing'
import CatigoryShop from '../Components/catigoryShop/CatigoryShop'
import NewCatigories from '../Components/newCatigories/NewCatigories'
import SecondLanding from '../Components/SecondLanding/SecondLanding'
import useLoading from '../../../Hooks/useLoading'
import Loader from '../../../Components/Loader/Loader'




const HomePage = () => {

  const loading=useLoading()

  if(loading){
    return(
      <div  className='LoaderContanier'>
        <Loader></Loader>
      </div>
    )
  }

  return (
    <div >
 
    
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
