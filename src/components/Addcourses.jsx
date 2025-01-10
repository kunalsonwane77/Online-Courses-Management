import React, { useState } from 'react'
import { useContext } from 'react'
import { coursecontext } from '../context/Coursecontextprovider'
import { type } from '@testing-library/user-event/dist/type'

function Addcourses() {



let {Dispatch,courses}=useContext(coursecontext)

 let [title,settitle]=useState("")
let [Instructor,setinstructor]=useState("")
let [Duration,setduration]=useState("")
let [status,setstatus]=useState("")


   function handlesubmit(e){
    e.preventDefault()

    let obj= {
        title,
        Instructor,
        Duration,
        status
    }
  console.log(obj)
    

  Dispatch({type:"Add",payload:obj})



   }

  return (
    <div className='border-2 w-[350px] h-[250px] mt-2 mx-auto '>
        <form action="" onSubmit={handlesubmit} className='text-center'>

            <input type="text" name="title" id="" value={title} onChange={(e)=>settitle(e.target.value)}placeholder='enter title' className='border-2' />
            <input type="text" name="Instructor" value={Instructor} id=""onChange={(e)=>setinstructor(e.target.value)} placeholder='enter Instructor' className='border-2' />
            <input type="text" name="Duration" value={Duration} id=""onChange={(e)=>setduration(e.target.value)} placeholder='enter Duration' className='border-2' />
              <select onChange={(e)=>setstatus(e.target.value)} className='block m-auto border-2'>
                <option value="">select</option>
                <option value="Active">Active</option>
                <option value="Not Active">Not Active</option>
              </select>
            <input type="submit" name="" id=""  className='block m-auto'/>
        </form>
    </div>
  )
}

export default Addcourses