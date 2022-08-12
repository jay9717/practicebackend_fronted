import React from "react"
import axios from "axios";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
const SignIn=()=>{
        const [message,setMessage]=useState("")
        const [username,setusername]=useState("")
        const [email,setemail]=useState("")
        const handlesubmit=(e)=>{
             if(e.target.name==="username")
             setusername(e.target.value)
             if(e.target.name==="email")
             setemail(e.target.value)
            
        }
       const navigate=useNavigate()
        const submit=(e)=>{ e.preventDefault()
            axios.post("http://localhost:3001/sign",{
                username:username,
                email:email
            }).then((res)=>{if(res.data.message!=="login success"){setMessage(res.data.message)}
              else{
                localStorage.setItem("token",res.data.token)
              navigate("/userpage")
               }
              })
              
          }
          
          function logouthandle(){
            localStorage.removeItem("token")
            navigate("/logout")
          }
          function handleauth(){
            axios.get("http://localhost:3001/getinfo",{
              headers:{Authorization:"Bearer "+localStorage.getItem("token")}
          }).then((res)=>{
            if(res.data!=='SUCCESS')
             navigate("/err")
             else
             navigate("/info")
        }).catch((err)=>console.log(err))
          }
        return(<>
         <button onClick={logouthandle}>logout</button>
         <button onClick={handleauth}>info</button>
          <fieldset>
            <legend>login user</legend>
          <form>
            username:<br/>
            <input type="text" id="username" name="username" onChange={(e)=>{handlesubmit(e)}}/><br/>
            email:<br/>
            <input type="email" id="email" name="email" onChange={(e)=>{handlesubmit(e)}}/><br/>
            <input type="submit" value="login" onClick={submit}/><br/>
         </form></fieldset>
         <h1>{message}</h1>
         
         
         
          </>
    )
}

export default SignIn