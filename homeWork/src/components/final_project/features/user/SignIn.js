import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import {  useDispatch } from "react-redux";
import { login, addUser  } from './userSlice'
import { useNavigate } from "react-router";

const SignIn = () => {

    let disputch = useDispatch();
    let nav = useNavigate();

    const user={
        "tz": "",
        "name": "",
        "password": "",
        "telephone": ""
    }

    const addMe=()=>{
        disputch(addUser(user));
        alert("hello to"+user.name);
        disputch(login(user))
        nav('/UserNav');
    }

    return ( 
        <>
        <br></br>
    <br></br>
    <TextField id="outlined-basic" label="user Name" variant="outlined"  onChange={(e) => user.name = e.target.value}></TextField>
    <br></br>
    <br></br>
    <TextField id="outlined-basic" label="password" variant="outlined"  onChange={(e) => user.password = e.target.value}></TextField>
    <br></br>
    <br></br>
    <TextField id="outlined-basic" label="phone" variant="outlined"  onChange={(e) => user.telephone = e.target.value}></TextField>
    <br></br>
    <br></br>
    <TextField id="outlined-basic" label="tz" variant="outlined"  onChange={(e) => user.tz = e.target.value}></TextField>
    <br></br>
    <br></br>
    <Button variant="outlined" onClick={addMe}>sign in</Button>

        </>
     );
}
 
export default SignIn;