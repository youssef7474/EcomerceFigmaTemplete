import React from 'react'
import TitleHeader from '../Components/TitleHeader/TitleHeader'
import LatestBlogs from '../Components/latestBlogs/LatestBlogs'
import Slider from '../Components/Slider/Slider'
import OurProgress from '../Components/OurProgress/OurProgress'
import FollowUs from '../Components/FollowUS/FollowUs'
import useLoading from '../../../Hooks/useLoading'
import Loader from '../../../Components/Loader/Loader'

const BlogPage = () => {
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
      <TitleHeader/>
      <LatestBlogs/>
      <Slider/>
      <OurProgress/>
      <FollowUs/>
    </div>
  )
}

export default BlogPage
