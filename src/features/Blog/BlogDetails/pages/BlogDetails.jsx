import React from 'react'
import Landing from '../Components/landing/Landing'
import Description from '../Components/Description/Description'
import Articles from '../Components/ArticlesCompo/Articles'
import ArticleTwo from '../Components/ArticleTwo/ArticleTwo'
import Slider from '../Components/Slider/Slider'
import useLoading from '../../../../Hooks/useLoading'
import Loader from '../../../../Components/Loader/Loader'

const BlogDetails = () => {
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
        <Landing/>
        <Description/>
        <Articles/>
        <ArticleTwo/>
        <Slider/>
    </div>
  )
}

export default BlogDetails
