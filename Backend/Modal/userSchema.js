const mongoose = require("mongoose");

// const schema= new mongoose.Schema({
//     full_Name:String,
//     age:Number,
//     email:String,
//     father_Name:String,
//     gender:String,
// });

const schema=new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    phone_no:{
        type:String,
        required:true,
    },
    password:{
        type:String,
             required:true,
    },
    gender:{
        type:String,
             required:true,
    }

})

const UserModal= mongoose.model("user",schema);

module.exports = UserModal;