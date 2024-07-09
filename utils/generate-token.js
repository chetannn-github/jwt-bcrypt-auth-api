import jwt from "jsonwebtoken";

export const generateToken = (data) =>{
    return jwt.sign(data,process.env.JWT_SECRET);
}