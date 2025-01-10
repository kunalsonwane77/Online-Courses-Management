import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Update() {

   let [updtadata,setupdatedata]=useState({})

  let {upid}= useParams()
    
   async function updatedata(){
       let data = await fetch(`http://localhost:3000/courses/${upid}`)
       let actualdata = await data.json()
        
        setupdatedata(actualdata)

   }

   useEffect(()=>{
    updatedata()
   },[])

     
  return (
    <div>
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />

    </div>
  )
}

export default Update