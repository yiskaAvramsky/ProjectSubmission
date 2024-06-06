import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import AccessibleTable from './DataTable'
import Button from '@mui/material/Button'
import { useNavigate } from "react-router";

const MyCart = () => {
    const nav = useNavigate();
    const listProduct = useSelector(state => state.user.buying);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        let copy = 0;
        for (let product of listProduct) {
            copy += parseInt(product[0].price);
        }
        setTotalPrice(copy);
    }, [])

    const payment = () => {
        if(listProduct.length==0){
            alert("you must add product to your cart!");
            return;
        }
        nav('/OrderSummary');
    }

    return (
        <>
            <h1>My Cart</h1>
            <AccessibleTable listProduct={listProduct}></AccessibleTable>
            <br />
            <label type="text" variant="outlined" >total Price:{totalPrice}</label>
            <br />
            <Button variant="outlined" onClick={payment}>for payment</Button>
        </>
    );
}

export default MyCart;