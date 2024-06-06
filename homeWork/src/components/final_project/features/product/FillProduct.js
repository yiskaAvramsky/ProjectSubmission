import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import {addOneProduct,updateOneProduct} from './productSlice'
import { useDispatch } from "react-redux";

const FillProduct = () => {
    let disputch = useDispatch();
    const product = {
        "name": "",
        "description": "",
        "imgUrl": "/images/noPic.jpg",
        "color": "",
        "price": 0,
        "company": "",
    }


    const addP =() => {
         disputch(addOneProduct(product));
         alert("The product has been successfully added!");
    }
    
    
    const file = (e) => {
        product.imgUrl += e.name;
        console.log("eeeeeeeeeeeeee");
        console.log(e);
        console.log(e.name)
        console.log(product.imgUrl)
        product.imgUrl="/images/por12.jpg"

    }

//     const [choiCreation, setChoiCreation]=useState();
//   const choiceCreation = (e)=> {
//     const file = URL.createObjectURL(e.target.files[0])
//     setChoiCreation(file)
//     product.imgUrl = file;
//         // console.log("eeeeeeeeeeeeee");
//         // console.log(e);
//         // console.log(e.name)
//         // console.log(product.imgUrl)
//   }
    
    return (
        <>
            <br></br>
            <br></br>
            <TextField id="outlined-basic" label="name product" variant="outlined" onChange={(e) => product.name = e.target.value}></TextField>
            <br></br>
            <br></br>
            <TextField id="outlined-basic" label="product description" variant="outlined" onChange={(e) => product.description = e.target.value}></TextField>
            <br></br>
            <br></br>
            <TextField id="outlined-basic" label="color" variant="outlined" onChange={(e) => product.color = e.target.value}></TextField>
            <br></br>
            <br></br>
            <TextField id="outlined-basic" label="price" variant="outlined" onChange={(e) => product.price = e.target.value}></TextField>
            <br></br>
            <br></br>
            <TextField id="outlined-basic" label="company" variant="outlined" onChange={(e) => product.company = e.target.value}></TextField>
            <br></br>
            <br></br>
            {/* <input type="file" onChange={choiceCreation}/><br/>
            <img src={choiCreation}></img>  */}
            <br></br>
            <br></br>
            <Button variant="outlined" onClick={addP}>שמירה</Button>

        </>
    );
}

export default FillProduct;