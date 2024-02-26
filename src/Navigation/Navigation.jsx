import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayOut from '../layout/LayOut/LayOut'
import HomePage from '../features/homePage/pages/HomePage'
import About from '../features/About/Pages/About'
import StorePage from '../features/Stores/Pages/StorePage'
import BlogPage from '../features/Blog/pages/BlogPage'
import BlogDetails from '../features/Blog/BlogDetails/pages/BlogDetails'

const Navigation = () => {
  return (
    <Routes>
        <Route element={<LayOut></LayOut>}>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/store' element={<StorePage/>}></Route>
            <Route path='/blog' element={<BlogPage/>}></Route>
            <Route path='/blog/:id' element={<BlogDetails/>}></Route>
        </Route>
    </Routes>
  )
}

export default Navigation
