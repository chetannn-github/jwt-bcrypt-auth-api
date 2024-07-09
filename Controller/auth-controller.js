import bcrypt, { hashSync } from "bcrypt"
import User from "../Models/user-model.js"
import { generateToken } from "../utils/generate-token.js";

export const login = async(req,res) =>{
   const {email,password} = req.body;
   
   let user = await User.findOne({email});
      if(!user){
         res.status(500).send("email or password is not correct");
      }

    const result = bcrypt.compare(password,user.password);

   if(result){
      let token = generateToken({email});
      res.cookie("token",token,{
         maxAge:1000*60*60*24*30,
         httpOnly:true,
         secure:true,
      })
      res.status(201).send(user);
   }else{
      res.status(500).send("email or password is not correct");
   }
}


export const signUp=async (req,res) =>{
   const {username,password,email} = req.body;
   let user = await User.findOne({email});

   if(user){
      res.send("already user  exists please Login")
   }


   let salt =  await bcrypt.genSalt(10);
   let hash =await bcrypt.hash(password,salt);

   user = await User.create({
      email,password:hash,username
   });

   // login hum khud hii krra de 
      let token = generateToken({email});

      res.cookie("token",token,{
         maxAge:1000*60*60*24*30,
         httpOnly:true,
         secure:true,
      })
   res.send(user);
}


export const logout = (req,res) =>{
    res.cookie("token","")
    res.send("logout ho gya hh")
}


export const browse = (req,res) =>{
  res.send("this  is browse page")
}

