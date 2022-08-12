const express=require("express")
const server=express()
const config=require("./config")
const cors=require("cors")
server.use(cors())
const session=require("express-session")

const {createProxyMiddleware}=require("http-proxy-middleware")
server.use("/sign",createProxyMiddleware({
    target:config.SIGNINURL,
    changeOrigin:true, 
    pathRewrite:{"^/sign":"/login"}
}))
server.use("/register",createProxyMiddleware({
    target:config.SIGNUPURL,
    changeOrigin:true,
    pathRewrite:{"^/register":"/create"}
}))
server.use("/getinfo",createProxyMiddleware({
    target:config.INFOURL,
    changeOrigin:true, 
    pathRewrite:{"^/getinfo":"/info"}
}))
module.exports=server