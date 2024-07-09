import mongoose from "mongoose";



const connectToDb = async() => {
    try{
       await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected to db"); 
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
    
}

export default connectToDb;