import { async } from "@firebase/util";
import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { auth } from "../firebase"
import styles from "./login.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import  {BASEURL} from "../config";
import axios from "axios";
const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [age, setage] = useState("");
    const [gender, setgender] = useState("");
    const [phoneNo, setphoneNo] = useState("");
    const navigate = useNavigate()

    const signupHandler = async (e) => {
        e.preventDefault();
        console.log("LoginHandler");
        try {
          if(
            !firstName ||
            ! lastName ||
            ! email ||
             ! password ||
             ! age ||
             ! gender ||
             !  phoneNo      ){
                alert("required field are missing")
                return;
             }
             console.log("signup")
             const obj={
                firstName,
                lastName,
                age,
                email,
                password,
                phoneNo,
                gender,
             };
             const response=await axios.post(`${BASEURL}/sign`,obj)
             console.log("response", response);
             if (response.data.status) {
                navigate("/");
                alert(response.data.message);
              } else {
                alert(response.data.message);
              }
        }
        catch (error) {
            console.log("error", error.message);
            alert("error", error.message);
        }

    }
    return (


        <>
            <form onSubmit={signupHandler} className={styles.loginWrapper} >
                <h1>SignUp</h1>

                First Name<Input sx={{ width: "100%" }}
                    variant="outlined"
                    id="outlined-basic"  placeholder="Enter your First Name" onChange={(e) => setfirstName(e.target.value)} /><br></br><br></br>
                Last Name:<Input sx={{ width: "100%" }}
                    variant="outlined"
                    id="outlined-basic"  placeholder="Enter your Last Name" onChange={(e) => setlastName(e.target.value)} />
                     Email:<Input sx={{ width: "100%" }}
                    variant="outlined"
                    id="outlined-basic" type="email" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} /><br></br><br></br>
                Password:<Input sx={{ width: "100%" }}
                    variant="outlined"
                    id="outlined-basic" type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
         Age<Input sx={{ width: "100%" }}
                    variant="outlined"
                    id="outlined-basic"  placeholder="Enter your Age" onChange={(e) => setage(e.target.value)} /><br></br><br></br>
                Gender:<Input sx={{ width: "100%" }}
                    variant="outlined"
                    id="outlined-basic"  placeholder="Enter your Gender" onChange={(e) => setgender(e.target.value)} />
                     Phone No:<Input sx={{ width: "100%" }}
                    variant="outlined"
                    id="outlined-basic"  placeholder="Enter your Phone No" onChange={(e) => setphoneNo(e.target.value)} />
                   <div>
        <Link to={"/"} className={styles.linkPara}>
          Already have an account? Login
        </Link>
      </div>
                <Button  sx={{ width: "100%" }} type="submit" variant="contained">SignUp</Button>
            </form>

        </>
    )
}
export default SignUp