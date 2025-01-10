import React from 'react'
import { useContext } from 'react'
import { coursecontext } from '../context/Coursecontextprovider'
import { Link } from 'react-router-dom'
function Coursecard({title,Duration,status,instructor,id}) {
    

    let {Dispatch}=useContext(coursecontext)

  function handlestatus(){
    Dispatch({type:"status",payload:{id,status}})
    
  }

  return (
    <div className='w-[300px] border-2 h-[300px] mt-4 mx-auto rounded-md text-center'>
        <h1>{title}</h1>
        <p>{Duration}</p>
        <button onClick={handlestatus}>{status}</button>
        <h3>{instructor}</h3>
        <Link to={`/${id}`}><button>update</button></Link>
    </div>
  )
}

export default Coursecard