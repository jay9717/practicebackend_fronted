import React, { useState } from "react"
import {Link,Routes,Route,BrowserRouter, Navigate} from 'react-router-dom'
import Home from "./home"
import Logout from "./logout"
import SignIn from "./signin"
import SignUp from "./signup"
import Dashboard from "./userpage"
import Error from "./AuthenticationError"
import Info from "./info"
import Protected from "./`protected component"
const Router=()=>{
     localStorage.getItem("token")
    return(<>
    
        <BrowserRouter> 
         <Routes>
        
         <Route path="/" element={<Home/>}></Route>
         <Route path="/signin" element={<SignIn/>}></Route> 
         <Route path="/signup" element={<SignUp/>}></Route>
         <Route path="/logout" element={<Logout/>}></Route>
         <Route path="/userpage" element={<Dashboard/>}></Route>
         <Route path="/info" element={<Info/>}></Route>
         <Route path="/err" element={<Error/>}></Route>
         </Routes>
         </BrowserRouter>
         
        
        </>
    )
}
export default Router