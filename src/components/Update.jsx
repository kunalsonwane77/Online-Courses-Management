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
    <div className='border-2 w-[320px] mt-2 mx-auto text-center'>
        <input type="text" value={updtadata.title} name="title" id=""  className='border-2' onChange={handlechange}/>
        <input type="text" value={updtadata.Duration} name="Duration" id="" className='border-2'onChange={handlechange} />
        <input type="text" value={updtadata.Instructor} name="Instructor"  id="" className='border-2' onChange={handlechange}/>
        <select name="status" id="" className='border-2 block mt-2 m-auto' onChange={handlechange}>
          <option value="">select</option>
          <option value="Active">Active</option>
          <option value="Not Active">Not Active</option>
        </select>
         <button className='block m-auto' onClick={()=>Dispatch({type:"update",payload:{upid,updtadata}})}>submit</button>

    </div>
  )
}

export default Update