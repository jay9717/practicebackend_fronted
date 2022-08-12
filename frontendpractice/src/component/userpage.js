import React, { useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import "../style/react.css"
const Dashboard=()=>{
    const navigate=useNavigate()
    function logouthandle(){
        localStorage.removeItem("token")
        navigate("/logout")
        
      }   
      useEffect(()=>{
        if(!localStorage.getItem("token"))
        {
        navigate("/err")
       }},[]) 
    return(
        <>
        <button onClick={logouthandle}>logout</button>
        <h1>hello welcome! </h1>
        <div>now just wait until we are perfoming something......... </div>
        </>
    )
}
export default Dashboard 