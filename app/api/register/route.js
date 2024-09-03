import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req){
    try{
      const {name,email,password}=await req.json();
      const hashedPassword = await bcrypt.hash(password,10); //mtlb 10 rounds of hashing
//to connect to database and store data

await connectMongoDB();
await User.create({name,email,password: hashedPassword}); //this stores data to db
      return NextResponse.json({message:"User registered"},{status:201});
    }
    catch(error){
           return NextResponse.json({message:"An error occured while registering the user."},{status:500});
    }
}