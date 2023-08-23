import {mongoose }from "mongoose";




export const userSchema = mongoose.Schema({


    name: String,
    username:String,
    email:String,
    phone:String



})

const user = mongoose.model('user', userSchema);

export default user 