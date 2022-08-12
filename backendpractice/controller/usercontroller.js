const usermodel=require("../model/usermodel")
const jwt=require("jsonwebtoken")
usercontroller={}
const privatekey="jsonkeyfortoken"
usercontroller.register=async(req,res)=>{
    const body=req.body
    
    try{if(await usermodel.findOne({username:body.username})){res.send({message:"useralready exists"})}
    else{   
    const user=await usermodel.create({
            username:body.username,
            email:body.email,
            phone_no:body.phone_no 
        })
       if(user){
        res.send({message:"user register successfully",status:true})}
       else
       res.send({message:"not register",status:false})
    }}
    catch(err){
        res.send(err)        
    }
}

usercontroller.login=async(req,res,)=>{
    const body=req.body
    try
    {  const gentoken=jwt.sign({email:body.email},privatekey)
        const userdtl=await usermodel.findOne({username:body.username,email:body.email},{email:0})
        if(userdtl){
                    res.send(
                        {
                            message:"login success",
                            data:userdtl,
                            token:gentoken,
                            status:true
                        }
                        )
                    }
                    else
                    {
                        res.send(
                            {
                                message:"please check you username and password",
                                status:false
                            }
                            )
                    }
               
                }
                catch(err)
                {
                    res.send(err)
                }
            }
module.exports=usercontroller