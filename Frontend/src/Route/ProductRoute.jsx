import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const ProductRoute =()=>{
    return localStorage.getItem("uid") ? <Outlet/> : <Navigate to={"/"}/>
}

export default ProductRoute
