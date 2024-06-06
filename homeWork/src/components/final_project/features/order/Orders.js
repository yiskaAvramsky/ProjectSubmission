import { getAllOrder } from "./orderSlice";

import { useEffect } from "react";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from "react-redux";

const Orders = () => {
    let disputch = useDispatch();
    const listOrder = useSelector(state => state.oreder.arrOrder)
    const currentUser = useSelector(state => state.user.currentUser)
    
    useEffect(() => {
        disputch(getAllOrder());
        console.log(disputch(getAllOrder()))
        // if(currentUser.password!='admin'){
        //     listOrder=listOrder.filter(o=>o.userId==currentUser.id);
        // }
    }, [])

    
    const styles = {
      container: {
        maxWidth: 800, // רוחב הטבלה המרבי
        margin: 'auto', // מרכז הטבלה בתוך הקונטיינר
      }
    };

    return (<>
{
           currentUser&&currentUser.password!='admin'&&
           <TableContainer style={styles.container} component={Paper}>
           <Table sx={{ minWidth: 650 }} aria-label="caption table">
             <TableHead>
               <TableRow>
                 <TableCell>orderDate</TableCell>
                 <TableCell align="right">dueDate</TableCell>
                 <TableCell align="right">userId</TableCell>
                 <TableCell align="right">address</TableCell>
               </TableRow>
             </TableHead>
             <TableBody>
               {listOrder.filter(x => x.userId == currentUser.id).map((row) => (
                 <TableRow className="hoveredRow">
                   <TableCell component="th" scope="row">{row.orderDate}</TableCell>
                   <TableCell align="right">{row.dueDate}</TableCell>
                   <TableCell align="right">{row.userId}</TableCell>
                   <TableCell align="right">{row.address}</TableCell>
                 </TableRow>
       ))}
             </TableBody>
           </Table>
         </TableContainer>
       
        }
        {
           currentUser&&currentUser.password=='admin'&& 
                    
                        <TableContainer style={styles.container} component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="caption table">
                          <TableHead>
                            <TableRow>
                              <TableCell>orderDate</TableCell>
                              <TableCell align="right">dueDate</TableCell>
                              <TableCell align="right">userId</TableCell>
                              <TableCell align="right">address</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {listOrder.map((row) => (
                              <TableRow className="hoveredRow">
                                <TableCell component="th" scope="row">{row.orderDate}</TableCell>
                                <TableCell align="right">{row.dueDate}</TableCell>
                                <TableCell align="right">{row.userId}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                              </TableRow>
                    ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    
                
        }

    </>);
}

export default Orders;