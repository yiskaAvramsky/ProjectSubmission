import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from "react-redux";
import { addOneOrder } from '../order/orderSlice'
import { useState } from 'react';
import { useNavigate } from 'react-router';


const OrderSummary = () => {
  const nav = useNavigate();
  const listProduct = useSelector(state => state.user.buying);
  const currentUser = useSelector(state => state.user.currentUser);
  const dispach = useDispatch();
  var currentDate = new Date();
  const [isAddres, setIsAddres] = useState(false);

  const [order, setOrder] = useState({
    "orderDate": new Date().toISOString().split('T')[0],
    "dueDate": currentDate.toISOString().split('T')[0],
    "userId": currentUser.id,
    "address": "",
    "ownerCreditCard": "",
    "numberCreditCard": "",
    "CVV": "",
    "cart": listProduct
  });

  const addOrder = () => {
    if (order.address == "") {
      setIsAddres(true);
      return;
    }
    currentDate.setDate(currentDate.getDate() + 4);//start day
    dispach(addOneOrder(order));
    alert("The order was successfully placed!!!")
    nav('/UserNav');
  }



  return (<>
    <h2>personal datailes</h2>
    <br></br>
    <br></br>
    <TextField id="outlined-basic" value={currentUser.name} label="full name" variant="outlined" ></TextField>
    <br></br>
    <br></br>
    <TextField id="outlined-basic" value={currentUser.telephone} label="phone" variant="outlined"></TextField>
    <br></br>
    <br></br>
    <TextField id="outlined-basic" label="address" variant="outlined" onChange={(e) => {setOrder({ ...order, address: e.target.value });setIsAddres(false);}}></TextField>
    <br></br>
    <br></br>
    {isAddres && <>
    <div variant="outlined" style={{border: "2px solid red", padding: "5px" , width:"14%"}}>
      This is a required field
    </div><br></br></>
    }
    <TextField id="outlined-basic" label="the owner of the credit card" variant="outlined" onChange={(e) => setOrder({ ...order, ownerCreditCard: e.target.value })}></TextField>
    <br></br>
    <br></br>
    <TextField id="outlined-basic" label="number of credit card" variant="outlined" onChange={(e) => setOrder({ ...order, numberCreditCard: e.target.value })}></TextField>
    <br></br>
    <br></br>
    <br></br> <TextField id="outlined-basic" className='CVV' label="CVV" variant="outlined" onChange={(e) => setOrder({ ...order, CVV: e.target.value })}></TextField>
    <br></br>
    <br></br>
    <Button variant="outlined" onClick={addOrder}>complete your order</Button>

  </>);
}

export default OrderSummary;