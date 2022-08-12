import React from "react"
import { useNavigate } from "react-router-dom"
import "../style/react.css"
export default function Home(){
    const navigate=useNavigate()
   const register=()=>{
    navigate("/signup")
    
   }
   const login=()=>{
    navigate("/signin")
   }
    return(
        <>
           <div  id="align">
            <span id="p">Please register or login to use the app</span>
           <button onClick={register}>Register</button> &nbsp;
             <button onClick={login}>Login</button>
           </div>
           <hr/>
           <h2>hello welcome to practice session</h2>
             
            
        </>
    )
}

