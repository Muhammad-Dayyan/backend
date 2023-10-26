import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ProductCard(props) {
    
  const { productObj } = props;
    const navigation = useNavigate();
 


    if (!productObj) {
      return null; 
    }
  
    const { ProductName, ProductPrice, ProductDesc, id } = productObj;
  return (
    <Card sx={{ width: 300, border: "1px solid black" }}>
      <CardContent>
    
        <Typography variant="h5" component="div">
        Name:{ProductName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Price:${ProductPrice}
        </Typography>
        <Typography variant="body2">
        Decsription:  {ProductDesc.slice(0, 25) + "..."}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{
navigation(`/product/${id}`)
        }}>View More</Button>
        <Button size="small"  >Delete</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
}