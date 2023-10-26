import React, { useEffect, useState } from "react";
import TransitionsModal from "../component/form";
import { Box, Button } from "@mui/material";
import {   collection,  onSnapshot} from "firebase/firestore";
import { db } from "../firebase";
import ProductCard from "../component/productCard";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

const HomePage=()=>{
    const [allProducts,setAllProducts]=useState([])
 useEffect(()=>{
  
    let arr=[]
    const unsub = onSnapshot(collection(db, "Products"), (doc) => {
      
        arr=[]
       doc.forEach((data)=>{
        arr.push({...data.data(),id: data.id})
       })
            
        setAllProducts(arr)
    });
 },[])

 console.log("Products",allProducts);
 const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
Navigate=("/") 
      })
      .catch((error) => {
      
        console.error("Error signing out:", error);
      });
  };

    return(<>
     <Box
 
 display={"flex"}
 justifyContent={"center"}
 marginTop={"20px"}
>
<TransitionsModal/>
</Box>
<Box  sx={{
          display: "flex",
          marginTop: "50px",
          flexWrap: "wrap",
          gap: "20px",
          px: "30px",
        }}>
            <Button variant="outlined" onClick={handleSignOut}>
          Logout
        </Button>
    {allProducts.map((product,index)=>{
        console.log("product", product);
        return  <ProductCard productObj={product} key={product.id}/> ;
        
    })}
</Box>
    
    </>)
}
export default HomePage