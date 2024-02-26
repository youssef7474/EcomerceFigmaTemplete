import React from 'react'
import TitleHeader from '../Components/TitleHeader/TitleHeader'
import LatestBlogs from '../Components/latestBlogs/LatestBlogs'
import Slider from '../Components/Slider/Slider'
import OurProgress from '../Components/OurProgress/OurProgress'
import FollowUs from '../Components/FollowUS/FollowUs'

const BlogPage = () => {
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
