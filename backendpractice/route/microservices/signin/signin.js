const express=require('express')
const server=express()
const bp=require("body-parser")
server.use(bp.json())
const auth=require("../../../Authentication/jwtauth")
const usercontroller=require("../../../controller/usercontroller")
server.post("/login",usercontroller.login)
module.exports=server   