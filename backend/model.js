import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
        fullName:{
                type:String,
                required:true
        },
        email:{
                type:String,
                unique:true,
                required:true
        },
        password:{
                type:String,
                required:true
        },
        authToken:{
                type:String,
                default:null
        }
})

const UserModel = mongoose.model("user",userSchema)
export default UserModel
