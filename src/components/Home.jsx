import React, { useContext, useEffect } from 'react'
import { coursecontext } from '../context/Coursecontextprovider'
import { type } from '@testing-library/user-event/dist/type'
import Coursecard from './Coursecard'

function Home() {


  let {Dispatch,courses}=useContext(coursecontext)



  async function fetchcoursedata(){
    let data = await fetch("http://localhost:3000/courses")
    let actualdata = await data.json()
    Dispatch({type:"fetch",payload:actualdata})
  }

  useEffect(()=>{
    fetchcoursedata()
  },[])
  

  return (
    <div className='grid grid-cols-3'>
       {courses.map((el)=>{
        return <Coursecard key={el.id} id={el.id} title={el.title} instructor={el.Instructor} Duration={el.Duration} status={el.status} />
       })}
    </div>
  )
}

export default Home