import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import { removeFromCart } from './userSlice'
import { useDispatch } from "react-redux";
import { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CardProduct from '../product/CardProduct'


export default function AccessibleTable({ listProduct }) {
  const rows = listProduct;
  let disputch = useDispatch();
  const [p, setP] = useState({
    id: 0,
    name: "",
    description: "",
    imgUrl: "/images/por1.jpg",
    price: "",
    color: "",
  });

  const removeMe = () => {
    disputch(removeFromCart(p.id));
    handleClose();
  }


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (id, name, des, img, price, color) => {
    setP({
      id: id,
      name: name,
      description: des,
      imgUrl: img,
      price: price,
      color: color,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const styles = {
    container: {
      maxWidth: 800, // רוחב הטבלה המרבי
      margin: 'auto', // מרכז הטבלה בתוך הקונטיינר
    }
  };

  return (
    <>
      <TableContainer style={styles.container} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>name</TableCell>
              <TableCell align="right">color</TableCell>
              <TableCell align="right">company</TableCell>
              <TableCell align="right">price</TableCell>
              <TableCell align="right">description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => row.map(p => (
              <TableRow className="hoveredRow" onClick={(p) => handleClickOpen(row[0].id, row[0].name, row[0].description, row[0].imgUrl, row[0].price, row[0].color)} key={p.name}>
                <TableCell component="th" scope="row">{p.name}</TableCell>
                <TableCell align="right">{p.color}</TableCell>
                <TableCell align="right">{p.company}</TableCell>
                <TableCell align="right">{p.price}</TableCell>
                <TableCell align="right">{p.description}</TableCell>
              </TableRow>
            )))}
          </TableBody>
        </Table>
      </TableContainer>


      <React.Fragment>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"product"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">

              <CardProduct oneProduct={p} fromWhere="myCart"></CardProduct>

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={removeMe}>remove from cart</Button>
            <Button onClick={handleClose} autoFocus>
              close
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </>

  );
}
