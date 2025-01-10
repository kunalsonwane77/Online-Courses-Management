import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Addcourses from './Addcourses'
import Update from './Update'

function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/addcourses' element={<Addcourses/>}/>
            <Route path='/:upid' element={<Update/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes