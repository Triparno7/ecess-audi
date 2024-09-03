import mongoose from "mongoose";

export const connectMongoDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI); //this is the connection string we stored in .env file
        console.log("Connected to Mongo DB!!");
}catch(error){
    console.log("Error connecting to mongodb!",error);
}
}