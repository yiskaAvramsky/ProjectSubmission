import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, getAllUser } from './userSlice'


import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Users = () => {

  let disputch = useDispatch();
  const listUsers = useSelector(state => state.user.arrUser)

  useEffect(() => {
    disputch(getAllUser());
    console.log(disputch(getAllUser()));
    console.log(listUsers);
  }, [])

  const styles = {
    container: {
      maxWidth: 800, // רוחב הטבלה המרבי
      margin: 'auto', // מרכז הטבלה בתוך הקונטיינר
    }
  };

  return (<>
    <TableContainer component={Paper} style={styles.container}>
      <Table aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell >name</TableCell>
            <TableCell align="right" >tz</TableCell>
            <TableCell align="right" >password</TableCell>
            <TableCell align="right" >telephone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listUsers.map((row, index) => (
            <TableRow className="hoveredRow" key={index}>
              <TableCell component="th" scope="row" >{row.name}</TableCell>
              <TableCell align="right" >{row.tz}</TableCell>
              <TableCell align="right">{row.password}</TableCell>
              <TableCell align="right" >{row.telephone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>);
}

export default Users;










