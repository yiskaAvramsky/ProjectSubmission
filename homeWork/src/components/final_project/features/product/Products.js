import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllProduct } from './productSlice'
import OneProduct from "./OneProduct";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';

const Products = () => {

    let disputch = useDispatch();
    const listP = useSelector(state => state.product.arrProduct)
    const [listProduct, setListProduct] = useState(listP);
    const [password, setPassword] = useState('');


    useEffect(() => {
        if (listP.length === 0) {
            disputch(getAllProduct());
        } else {
            setListProduct(listP);
        }
    }, [disputch, listP]);
    


    const filterPrice = () => {
        const sorted = [...listProduct].sort((a, b) => a.price - b.price);
        setListProduct(sorted);
    }

    const lookUp = (e) => {
        setPassword(e.target.value);
        const filteredProducts = listP.filter(x => x.name.includes(e.target.value));
        setListProduct(filteredProducts);
    }

    return (<>
        <Button variant="outlined" sx={{ margin: '10px' }} onClick={filterPrice}>filter by price</Button>
        <TextField id="outlined-basic" label="search" variant="outlined" onChange={(e) => lookUp(e)}></TextField>
        <Grid container spacing={2}>
            {
                listProduct.map(item => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                        <OneProduct singleProduct={item} fromWhere="Products"></OneProduct>
                    </Grid>
                ))
            }
        </Grid>

    </>);
}

export default Products;










