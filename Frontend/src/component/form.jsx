import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',

  boxShadow: 24,
  p: 2,
  borderRadius: "12px",
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [ProductName, setProductName] = React.useState("")
  const [ProductPrice, setProductPrice] = React.useState("")
  const [ProductDesc, setProductDesc] = React.useState("")

  const addTodo = async (e) => {
    e.preventDefault()

    try {


      const docRef = await addDoc(collection(db, "Products"), {
        ProductName,
        ProductPrice,
        ProductDesc,
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Your data was Submited")
    } catch (error) {
      console.error(error);
    }
   setOpen("")
  }


  return (
    <div>
      <Button variant='contained' onClick={handleOpen}>ADD PRODUCTS</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >


        <Fade in={open}>
          <Box sx={style}>
            <Box sx={{ borderBottom: "1px solid black" }}>
              <h1 className="text-3xl font-bold">ADD PRODUCTS</h1>
            </Box>
            <Box component={"form"} onSubmit={addTodo}><br />
              <h3>Product Name:</h3>
              <input type='text' className="border my-4 border-stone-500 rounded-lg p-3 w-full" placeholder='Enter Product Name:' onChange={(e) => setProductName(e.target.value)} /><br />
              <h3>Product Price:</h3>
              <input type='text' className="border my-4 border-stone-500 rounded-lg p-3 w-full" placeholder='Enter Product Price' onChange={(e) => setProductPrice(e.target.value)} /><br />
              <h3>Product Description:</h3>
              <textarea type='text' className="border my-4 border-stone-500 rounded-lg p-3 w-full" placeholder='Enter the Producr Desc' onChange={(e) => setProductDesc(e.target.value)} />
              <Box sx={{ display: "flex", justifyContent: "end", gap: "10px" }}><Button variant="contained" type='submit'>ADD</Button>
                <Button onClick={handleClose} color='error' variant="contained">CLOSE</Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}