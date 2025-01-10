import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { coursecontext } from '../context/Coursecontextprovider'


function Navbar() {

  let {Dispatch}=useContext(coursecontext)

async function handlefilter(e){
    let val=e.target.value
    let data = await fetch("http://localhost:3000/courses")
    let actualdata = await data.json()
    
    Dispatch({type:"filter",payload:{val,actualdata}})

}



  return (
    <div className='w-[100%] h-[60px] bg-slate-400 flex justify-around text-white items-center text-2xl '>
         <h1>📓</h1>
        <NavLink to={"/"} className={({isActive})=>isActive?"text-cyan-300":""}><h1>Home</h1></NavLink>
        <NavLink to={"/addcourses"} className={({isActive})=> isActive?"text-cyan-300":"" }><h1>AddCourses</h1></NavLink> 
         <select name="" id="" className='bg-slate-500 rounded-md p-1' onChange={handlefilter}>
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="notactive">Inactive</option>
         </select>
    </div>
  )
}

export default Navbar