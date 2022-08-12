import React from "react"
import { useState } from "react"
import axios from 'axios'
const SignUp=()=>{
    const [message,setMessage]=useState("")
    let username,email,phone
    const handlesubmit=(e)=>{
         if(e.target.name==="username")
         username=e.target.value
         if(e.target.name==="email")
         email=e.target.value
         if(e.target.name==="phone")
         phone=e.target.value
    }
    const submit=(e)=>{  e.preventDefault()
        axios.post("http://localhost:3001/register",{
         username:username,email:email,phone_no:phone
        }).then((res)=>{setMessage(res.data.message)
        localStorage.setItem("token",res.data.token)}).catch((err)=>{console.log(err)})
        
       
    }
    return(<>
    <fieldset>
        <legend>user information</legend>
     <form>
        username:<br/>
        <input type="text" id="username" name="username" onChange={(e)=>{handlesubmit(e)}}/><br/>
        email:<br/>
        <input type="email" id="email" name="email" onChange={(e)=>{handlesubmit(e)}}/><br/>
        phone:<br/>
        <input type="phone" id="phone" name="phone" onChange={(e)=>{handlesubmit(e)}}/><br/>
        <input type="submit" value="signup" onClick={submit}/><br/>
     </form>
     </fieldset>
      <h1>{message}</h1>
</>
       
    )
}

export default SignUp