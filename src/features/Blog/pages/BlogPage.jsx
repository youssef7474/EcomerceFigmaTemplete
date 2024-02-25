import React from 'react'
import TitleHeader from '../Components/TitleHeader/TitleHeader'
import LatestBlogs from '../Components/latestBlogs/LatestBlogs'
import Slider from '../Components/Slider/Slider'
import OurProgress from '../Components/OurProgress/OurProgress'

const BlogPage = () => {
  return (
    <div>
      <TitleHeader/>
      <LatestBlogs/>
      <Slider/>
      <OurProgress/>
    </div>
  )
}

export default BlogPage
