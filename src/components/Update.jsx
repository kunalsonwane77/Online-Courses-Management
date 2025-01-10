import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { coursecontext } from '../context/Coursecontextprovider'
import { type } from '@testing-library/user-event/dist/type'
function Update() {

   let [updtadata,setupdatedata]=useState({})

   let {Dispatch}=useContext(coursecontext)

  let {upid}= useParams()
    
   async function updatedatafn(){
       let data = await fetch(`http://localhost:3000/courses/${upid}`)
       let actualdata = await data.json()
        
        setupdatedata(actualdata)

   }

   useEffect(()=>{
    updatedatafn()
   },[])

     function handlechange(e){
        setupdatedata({...updtadata,[e.target.name]:e.target.value})
     }

   

  return (
    <div className='border-2 w-[350px] h-[320px] mt-2 mx-auto rounded-lg text-center'>
      <h1 className='text-xl m-2'>Update Your Course</h1>
        <input type="text" value={updtadata.title} name="title" id=""  className='border-2 w-[80%] p-1 rounded-md outline-none my-2' onChange={handlechange}/>
        <input type="text" value={updtadata.Duration} name="Duration" id="" className='border-2 w-[80%] p-1 rounded-md outline-none my-2'onChange={handlechange} />
        <input type="text" value={updtadata.Instructor} name="Instructor"  id="" className='border-2 w-[80%] p-1 rounded-md outline-none my-2' onChange={handlechange}/>
        <select name="status" id="" className='block m-auto border-2 p-2 rounded-md bg-slate-400 text-white' onChange={handlechange}>
          <option value="">select</option>
          <option value="Active">Active</option>
          <option value="Not Active">Not Active</option>
        </select>
         <button className='block mt-3 m-auto bg-cyan-400 px-2 py-1 rounded-md text-white' onClick={()=>Dispatch({type:"update",payload:{upid,updtadata}})}>submit</button>

    </div>
  )
}

export default Update