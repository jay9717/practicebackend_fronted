const express=require("express")
const app=express()
const bp=require("body-parser")
/*
app.use(bp.json())
const userrouter=require("./route/userroutes")
app.use("/",userrouter)*/
app.listen(3000,()=>console.log("server started"))