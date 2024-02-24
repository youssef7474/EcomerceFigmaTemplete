import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayOut from '../layout/LayOut/LayOut'
import HomePage from '../features/homePage/pages/HomePage'
import About from '../features/About/About'

const Navigation = () => {
  return (
    <Routes>
        <Route element={<LayOut></LayOut>}>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/About' element={<About/>}></Route>
        </Route>
    </Routes>
  )
}

export default Navigation
