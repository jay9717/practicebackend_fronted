const express=require("express")
const userrouter=express.Router()
const usercontroller=require("../controller/usercontroller")
userrouter.post("/create",usercontroller.register)
userrouter.post("/login",usercontroller.login)
module.exports=userrouter