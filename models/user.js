import Email from "next-auth/providers/email";
import mongoose, {Schema, models} from "mongoose";

const userSchema=new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
},
{timestamps:true}
);

const User=models.User || mongoose.model("User",userSchema);
export default User;