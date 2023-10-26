// import React from "react";


// const Header =()=>{
//     return(
//         <>
//          <div className="container">
//       <h1 className="nav">Application!</h1>

//       <div>
//         <img
//           src={"https://flowbite.com/docs/images/people/profile-picture-5.jpg"}
//           className="image"
//         />
//       </div>
//     </div>
//         </>
//     )
// }
// export default Header
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            MD WEBSITE
          </Typography>
           
        </Toolbar>
      </AppBar>
    </Box>
  );
}