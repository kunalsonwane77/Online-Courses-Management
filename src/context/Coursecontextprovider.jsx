import { useReducer } from "react";
import { createContext } from "react";

export const coursecontext = createContext()


function Coursecontextprovider({ children }) {


    let [courses, Dispatch] = useReducer(reduserfn, [])


    function reduserfn(state, action) {
        switch (action.type) {
            case "fetch":
                return action.payload

            case "Add":
                fetch("http://localhost:3000/courses", {
                    method: "POST",
                    body: JSON.stringify(action.payload),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
            case "status":
                let newstatus = action.payload.status == "Active" ? "Not Active" : "Active"
                fetch(`http://localhost:3000/courses/${action.payload.id}`, {
                    method: "PATCH",
                    body: JSON.stringify({ status: newstatus }),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                return state.map((el) => {
                    if (el.id == action.payload.id) {
                        return { ...el, status: newstatus }
                    }
                    return el
                })

            case "update":
                fetch(`http://localhost:3000/courses/${action.payload.upid}`, {
                    method: "PUT",
                    body: JSON.stringify(action.payload.updtadata),
                    headers: {
                        "Content-Type": "application/json"
                    }

                })
                alert("updation success")
            case "delete" :
                 fetch(`http://localhost:3000/courses/${action.payload}`,{
                    method:"DELETE"
                 })
             return state.filter((el)=>{
                 return el.id!==action.payload
             })  
             

             case "filter":
              if(action.payload.val=="active"){
                let acdata= action.payload.actualdata.filter((el)=>{
                    return el.status=="Active"
                })
                return acdata
              }
              else if(action.payload.val=="notactive"){
                let notactive= action.payload.actualdata.filter((el)=>{
                    return el.status=="Not Active"
                })
                return notactive
              }
              else{
                return action.payload.actualdata
              }

        }

    }





    return (
        <coursecontext.Provider value={{ Dispatch, courses }}>
            {children}
        </coursecontext.Provider>
    )
}

export default Coursecontextprovider