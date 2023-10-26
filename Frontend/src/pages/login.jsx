import { async } from "@firebase/util";
import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { auth } from "../firebase"
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";




const login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const loginHandler = async (e) => {
        e.preventDefault()
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            console.log("user", user)
            localStorage.setItem("uid",user.user.uid)
            navigate("/home")

        }
        catch (error) {
            console.log("error", error.message);
            alert("error", error.message);
        }
    }


    return (
        <>
            <form onSubmit={loginHandler} className={styles.loginWrapper} >
                <h1>login</h1>
                Email:<Input sx={{ width: "100%" }}
                    id="outlined-basic"  placeholder="Enter the Email" onChange={(e) => setEmail(e.target.value)} value={email} /><br /><br />
                Password: <Input sx={{ width: "100%" }}
                    id="outlined-basic" type="password" placeholder="Enter the Password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
                <Link to="/signUp" className={styles.linkPara}>Don't Have an Account?</Link><br /><br />
                <Button sx={{ width: "100%" }} type="submit" variant="contained">Login</Button>
            </form>

        </>
    )
}

export default login