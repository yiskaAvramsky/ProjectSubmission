import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from "react-redux";
import { deleteOneProduct, updateOneProduct } from './productSlice'
import { useEffect } from "react";
import { useState } from "react";
import { addToCart } from '../user/userSlice';
import TextField from '@mui/material/TextField';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function MediaCard({ oneProduct,fromWhere }) {
  let disputch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser)
  const listProduct = useSelector(state => state.product.arrProduct)
  const [flag, setFlag] = useState(false)
  const p = {
    "name": oneProduct.name,
    "description": oneProduct.description,
    "imgUrl": "/images/por1.jpg",
    "price": oneProduct.price,
    "color":oneProduct.color,
}

  useEffect(() => {
    if (currentUser && currentUser.password == "admin")
      setFlag(true);
  }, [])

  const dell = () => {
    disputch(deleteOneProduct(oneProduct.id));
    alert("The deletion was successful!!!")
}



  const addMeToCart = () => {
    let product = listProduct.filter(p => p.id == oneProduct.id);
    disputch(addToCart(product));
    alert("Product added successfully!!!")
  }

  const updateMe = () => {
    disputch(updateOneProduct({ id: oneProduct.id, product: p }));
    handleClose();
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={oneProduct.imgUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         name product:{oneProduct.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          id:{oneProduct.id}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          price:{oneProduct.price}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        product description:{oneProduct.description}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          color:{oneProduct.color}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          company:{oneProduct.company}
        </Typography>
      </CardContent>
      <CardActions>
        
        
        {fromWhere!='myCart'&&flag && <><Button size="small" onClick={dell}>delete</Button>
          <Button size="small" onClick={handleClickOpen}>update</Button></>}
        {fromWhere!='myCart'&&!flag && <Button size="small" onClick={addMeToCart}>add to cart</Button>}

        <React.Fragment>
          
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"update product"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">

                <br></br>
                <br></br>
                <TextField id="outlined-basic" defaultValue={oneProduct.name} label="name product" variant="outlined" onChange={(e) => p.name = e.target.value}></TextField>
                <br></br>
                <br></br>
                <TextField id="outlined-basic" defaultValue={oneProduct.price} label="price" variant="outlined" onChange={(e) => p.price = parseInt(e.target.value)}></TextField>
                <br></br>
                <br></br>
                <TextField id="outlined-basic" defaultValue={oneProduct.color} label="color" variant="outlined" onChange={(e) => p.color = e.target.value}></TextField>
                <br></br>
                <br></br>
                <TextField id="outlined-basic" defaultValue={oneProduct.description} label="product description" variant="outlined" onChange={(e) => p.description = e.target.value}></TextField>
                <br></br>
                <br></br>
                <TextField id="outlined-basic" defaultValue={oneProduct.company} label="company" variant="outlined" onChange={(e) => p.company = e.target.value}></TextField>
                <br></br>
                <br></br>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={updateMe}>save</Button>
              <Button onClick={handleClose} autoFocus>
                close
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>

      </CardActions>
    </Card>
  );
}
