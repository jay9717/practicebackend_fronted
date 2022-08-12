const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/PRACTICE_USER").then(()=>console.log("connected"))
const schema=mongoose.Schema
const userschema=new schema({
    username:{type:String,required:[true,"enter username"],unique:true},
    email:{type:String,required:[true,"enter email"]},
    phone_no:{type:Number,required:[true,"phone is required"]}
})
const usermodel=mongoose.model("USER",userschema)
module.exports=usermodel