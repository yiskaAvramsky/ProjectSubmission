import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchAllProduct, postProduct, putProduct, deleteProduct } from './productApi'

const initialState = {
    arrProduct: []
}

//אקשן מיוחד- אקשן אסינכרוני- מאפשר לבצע קריאות  לשרת 
export const getAllProduct = createAsyncThunk(
    'product/getAllProduct', async (thunkAPI) => {
        const res = await fetchAllProduct();
        return res;
    },
)

export const addOneProduct = createAsyncThunk(
    'product/addOneProduct',
    async (product, thunkAPI) => {
        const res = await postProduct(product)
        return res
    },
)

export const updateOneProduct = createAsyncThunk(
    'product/updateOneProduct',
    async ({id, product}, thunkAPI) => {
        const res = await putProduct(id, product)
        return res
    },
)


export const deleteOneProduct = createAsyncThunk(
    'product/deletePost',// משמש לתיעוד בכלי דיבוג מאחורי הקלעים 
    async (id, thunkAPI) => {
        const res = await deleteProduct(id)
        return res
    },
)

export const productSlice = createSlice({
    name: "product",
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(getAllProduct.fulfilled, (state, { payload }) => {
                state.arrProduct = payload;
            })

            .addCase(addOneProduct.fulfilled, (state, { payload }) => {
                state.arrProduct.push(payload);
            })

            .addCase(updateOneProduct.fulfilled, (state, { payload }) => {
                let index = state.arrProduct.findIndex(x => x.id == payload.id);
                state.arrProduct[index] = payload;
            })

            .addCase(deleteOneProduct.fulfilled, (state, { payload }) => {
                // let index = state.arrProduct.findIndex(x => x.id == payload);
                // state.arrProduct.slice(index, 1);
                state.arrProduct=state.arrProduct.filter(p=>p.id!==payload);
            })
    }
})

export default productSlice.reducer