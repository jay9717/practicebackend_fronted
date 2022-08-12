const express=require('express')
const server=express()
const bp=require("body-parser")
server.use(bp.json())
const usercontroller=require("../../../controller/usercontroller")
server.post("/create",usercontroller.register)
module.exports=server 