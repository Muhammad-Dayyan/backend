require("dotenv").config();

const express = require("express");
const mongoose = require('mongoose');
const bcrypt =require("bcrypt");
const cors = require("cors");
const UserModal = require("./Modal/userSchema");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 app.use(cors());


const DB_URI = `mongodb+srv://MuhammadDayyanAnwar:dayyan@cluster0.ptg0ibb.mongodb.net/SMIT?retryWrites=true&w=majority`
mongoose.connect(DB_URI);
mongoose.connection.on("connected", () => console.log("MongoDB Connected"));
mongoose.connection.on("error", (err) => console.log("MongoDB Error", err));

// app.post("/api/createUser",async(req,res)=>{
//     try{
//         const body=req.body;
//         console.log(body)
//         const obj={
//             full_Name:body.full_Name,
//             age:body.age,
//             email:body.email,
//             father_Name:body.father_Name,
//             gender:body.gender,
//         }
//         const data=await UserModal.create(obj);
//         res.json({
//             messege:"SUCCESSFULLY WORK",
//             status:true,
//             data,
//         })
//     }
//     catch(error){
//         console.log(error.messege)
//         res.json({
//             messege:"NOT WORK",
//             status:false,
//             data:null,
//         })
//     }
//  })


// app.get("/api/getUser",async(req,res)=>{
//     try{
//         const userRecord=await UserModal.find({});
//         console.log(userRecord)
//         res.json({
//             messege:"SUCCESSFULLY WORK",
//             status:true,
//             data:userRecord,
//         })
//     }
//     catch(error){
//         console.log(error.messege)
//         res.json({
//             messege:"NOT WORK",
//             status:false,
//             data:null,
//         })
//     }

// })


// app.get("/api/singleUser/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const userRecord = await UserModal.findById(id)
//     console.log(userRecord)
//     res.json({
//       messege: "SUCCESSFULLY WORK",
//       status: true,
//       data: userRecord,



//     }

//     )
//   }
//   catch (error) {
//     console.log(error.messege)
//     res.json({
//       messege: "NOT WORK",
//       status: false,
//       data: null,
//     })
//   }
// })



// app.put("/api/updateUser/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const body=req.body
//     const userRecord = await UserModal.findByIdAndUpdate(id,body)
//     console.log(userRecord)
//     res.json({
//       messege: "SUCCESSFULLY WORK",
//       status: true,
//       data: userRecord,



//     }

//     )
//   }
//   catch (error) {
//     console.log(error.messege)
//     res.json({
//       messege: "NOT WORK",
//       status: false,
//       data: null,
//     })
//   }
// })



// app.delete("/api/deleteUser/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const userRecord = await UserModal.findByIdAndDelete(id)
//     console.log(userRecord)
//     res.json({
//       messege: "SUCCESSFULLY WORK",
//       status: true,
//       data: userRecord,



//     }

//     )
//   }
//   catch (error) {
//     console.log(error.messege)
//     res.json({
//       messege: "NOT WORK",
//       status: false,
//       data: null,
//     })
//   }
// })








app.post("/api/sign",async(req,res)=>{
  try{
    const body=req.body;
    console.log(body);
    const{firstName,lastName,age,gender,email,password,phoneNo}=body;
    if(
      !firstName||
      !lastName||
        !age||
        !gender||
        !email||
        !password||!phoneNo
    ){
    res.json({
      status: false,
      message: "Required fields are missing",
      data: null,
    })
  return;
   }
   console.log(password,"real");
  const hypass=await  bcrypt.hash(password,10)
  const objToSend={
    first_name:firstName,
    last_name:lastName,
    age,
    gender,
    phone_no:phoneNo,
    email,
    password:hypass,
    }
const emailExist =await UserModal.findOne({ email });
console.log("emailExist",emailExist)
if (emailExist) {
  res.json({
    status: false,
    message: "this email address has been already exists Please try again",
    data: null,
  });
  return;
}
const userSave =await UserModal.create(objToSend)
res.json({
  status: true,
  message: "user successfully signup",
  data: userSave,
});
}
  catch (error) {
    res.json({
      status: false,
      message: error.message,
      data: null,
    });
  }
})



app.post("/api/login",async(req,res)=>{
  const {email,password}=req.body;
  console.log("email , password",email,password)
  const emailExist=await UserModal.findOne({ email })
  console.log("emailExist",emailExist)
  if(!emailExist){
    res.json({
      messege:"Email invalid",
      status:false,
      data:null,

    })
    return;
  }
  
  const comparePass=await bcrypt.compare(password,emailExist.password)
  if(comparePass){
    res.json({
      messege:"User Login",
      status:true,
      data:emailExist,
    })
    return;
  }
  
  else{
    res.json({
      messege:"User Not Login",
      status:false,
      data:null,
    })
    return
  }
})


app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);