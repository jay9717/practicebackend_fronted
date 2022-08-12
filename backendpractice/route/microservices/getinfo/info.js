const express=require("express")
const server=express()
const auth=require("../../../Authentication/jwtauth")
server.get("/info",auth,(req,res)=>{
    const result=req.verification
    
    if(result)
    res.send(`SUCCESS`)
    else
    res.redirect("/sign")
})
module.exports=server