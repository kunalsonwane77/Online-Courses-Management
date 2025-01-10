import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-[100%] h-[60px] bg-slate-400 flex justify-around text-white items-center text-2xl '>
         <h1>📓</h1>
        <NavLink to={"/"} className={({isActive})=>isActive?"text-cyan-300":""}><h1>Home</h1></NavLink>
        <NavLink to={"/addcourses"} className={({isActive})=> isActive?"text-cyan-300":"" }><h1>AddCourses</h1></NavLink> 
         <select name="" id="" className='bg-slate-500 rounded-md p-1'>
            <option value="">All</option>
            <option value="">Active</option>
            <option value="">Inactive</option>
         </select>
    </div>
  )
}

export default Navbar