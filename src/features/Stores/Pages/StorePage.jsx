import React from 'react'
import Stores from '../Components/Stores/Stores'
import useLoading from '../../../Hooks/useLoading'
import Loader from '../../../Components/Loader/Loader'

const StorePage = () => {
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
      <Stores/>
    </div>
  )
}

export default StorePage
