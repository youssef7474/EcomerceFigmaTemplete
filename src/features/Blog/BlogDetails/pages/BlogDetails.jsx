import React from 'react'
import Landing from '../Components/landing/Landing'
import Description from '../Components/Description/Description'
import Articles from '../Components/ArticlesCompo/Articles'
import ArticleTwo from '../Components/ArticleTwo/ArticleTwo'
import Slider from '../Components/Slider/Slider'

const BlogDetails = () => {
  return (
    <div>
        <Landing/>
        <Description/>
        <Articles/>
        <ArticleTwo/>
        <Slider/>
    </div>
  )
}

export default BlogDetails
