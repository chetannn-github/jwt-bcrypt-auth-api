import jwt from "jsonwebtoken";
import userModel from "../Models/user-model.js";



export const isLoggedIn = async(req,res,next) =>{
    if(req.cookies.token){
        try{
           const  data =  jwt.verify(req.cookies.token,process.env.JWT_SECRET);
        //    console.log(data+"huu")
           req.user =await userModel.findOne({email:data.email}).select("-password");
            next();
        }catch(err){
            // res.status(401).send("not authorized");
            res.send(err.message);
        }
    }
    else{
        res.status(401).send("not authorized login kro")
    }
    
}