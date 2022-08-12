import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Info(){
    const navigate=useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem("token"))
        {
        navigate("/err")
       }},[])
    return(
        <>
        <h1>welcome to userpage</h1>
        </>
    )
}