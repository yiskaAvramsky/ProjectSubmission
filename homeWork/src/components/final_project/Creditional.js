import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router";
import * as React from 'react';
import { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { login } from './features/user/userSlice'

const Creditional = () => {
  let dis = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser)
  let user = {
    password: ""
  }
  const [flag, setFlag] = useState(false)
  let nav = useNavigate()

  useEffect(() => {
    
  }, [flag])

  const checkIsValid = async () => {  
    try {
      // אם login(user) מחזירה Promise, מחכים להשלמת הפעולה על ידי await
      let currentUser = await dis(login(user));
      console.log(currentUser);
  
      if (user.password === 'admin') {
        nav('AdminNav');
      } else {
        setFlag(true);
        if (currentUser.payload!=undefined) {
          nav('/UserNav');
        } else {
          nav('/SignIn');
        }
      }
    } catch (error) {
      // אם הפעולה נכשלה, התייחס לשגיאה כאן
      console.error("Login failed:", error);
    }
  }
  


  return (<>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br> <br></br>
    <br></br> <br></br>
    <br></br> <br></br>
    <br></br>
    <TextField id="outlined-basic" label="user name" variant="outlined"></TextField>
    <br></br>
    <br></br>
    <TextField type="password" id="outlined-basic" label="password" variant="outlined" onChange={(e) => user.password = e.target.value}></TextField>
    <br></br>
    <br></br>
    <Button variant="outlined" onClick={checkIsValid} >login</Button>
  </>);
}

export default Creditional;

