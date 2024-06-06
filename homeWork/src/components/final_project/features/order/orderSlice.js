import {fetchAllOrder,fetchOneOrder,postOrder,putOrder,deleteOrder} from './orderApi'
import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'

const initialState={
    arrOrder:[],
    // arrOrderForUser:[]
}


 export const getAllOrder = createAsyncThunk(
    'order/getAllOrder', async (thunkAPI) => {
        const res = await fetchAllOrder()
        return res
    },
)

 export const getOneOrder = createAsyncThunk(
    'order/getOneOrder',async  (id,thunkAPI) => {
       const res = await fetchOneOrder(id)
         return res
     },
 )

 export const addOneOrder = createAsyncThunk(
    'order/addOneOrder',async  (order,thunkAPI) => {
      const res = await postOrder(order)
        return res
    },
)

export const updateOneOrder = createAsyncThunk(
    'order/updateOneOrder', async  (id,order,thunkAPI) => {
      const res = await putOrder(id,order)
        return res
    },
)


export const deleteOneOrder = createAsyncThunk(
    'order/deleteOneOrder',// משמש לתיעוד בכלי דיבוג מאחורי הקלעים 
    async (id, thunkAPI) => {
      const res =  await deleteOrder(id)
        return res
    },
)

export const orderSlice=createSlice({
    name:"order",
    initialState,
    
    extraReducers:(builder)=>{
        builder
        .addCase(getAllOrder.fulfilled,(state,{payload})=>{
            state.arrOrder=payload;
        })

        // .addCase(.fulfilled,(state,{payload}))=>{
        //     state.arrOrderForUser=state.arrOrder.filter(o=>x.userId==payload);
        // }

        .addCase(addOneOrder.fulfilled,(state,{payload})=>{
            state.arrOrder.push(payload);
        })

        .addCase(updateOneOrder.fulfilled,(state,{payload})=>{
            let index = state.arrOrder.findIndex(x => x.id === payload.id);
            state.arrOrder.splice(index, 1, payload.order);
        })

        .addCase(deleteOneOrder.fulfilled,(state,{payload})=>{
            let index = state.arrOrder.findIndex(x => x.id === payload);
            state.arrOrder.slice(index, 1);
        })
    }
})
// export const {  } = productSlice.actions

export default orderSlice.reducer