
import './App.css'

import Header from './component/Header'
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Box } from "@mui/material";
import { app, db } from "./firebase";
import ProductCard from './component/productCard';
import { Route, Routes } from 'react-router-dom';

import Product from './pages/Product';
import HomePage from './pages/Home';
import  Login  from './pages/login';

import AuthRoute from './Route/AuthRoute';
import ProductRoute from './Route/ProductRoute';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';


function App() {



  
  return (
    <>
  
     <Header/>
     <Routes>
       <Route element={<AuthRoute/>}> 
     <Route index element={<Login/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      </Route> 
      <Route element={<ProductRoute/>}>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/product/:productid' element={<Product/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
  
         </>
  )
}



export default App