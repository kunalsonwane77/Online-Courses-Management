import React from 'react'
import { useContext } from 'react'
import { coursecontext } from '../context/Coursecontextprovider'
import { Link } from 'react-router-dom'
import { type } from '@testing-library/user-event/dist/type'
function Coursecard({title,Duration,status,instructor,id}) {
    

    let {Dispatch}=useContext(coursecontext)

  function handlestatus(){
    Dispatch({type:"status",payload:{id,status}})
    
  }

  return (
    <div className='w-[300px] border-2 h-[300px] mt-4 mx-auto rounded-md text-center hover:scale-105 duration-200'>
         
        <h1 className='font-medium text-2xl mt-2 p-3'>{title}</h1>
        <p className='m-3'> Duration : {Duration}</p>
        <button onClick={handlestatus} className={`border-2 px-2 py-1 m-3 text-white rounded-md ${status=="Active"?"bg-green-500":"bg-amber-500"}`}>{status}</button>
        <h3 className='text-xl m-2'>Instructor : {instructor}</h3>
        <Link to={`/${id}`}><button className='border-2 py-1 px-2 m-1 bg-slate-600 text-white rounded-md'>Update</button></Link>
        <button onClick={()=>Dispatch({type:"delete",payload:id})} className='border-2 bg-red-400 text-white py-1 px-2 m-1 rounded-md'>Delete</button>
    </div>
  )
}

export default Coursecard