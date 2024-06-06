import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'
import { fetchAllUser, postUser, loginUser } from './useApi'

const initialState = {
    arrUser: [],
    currentUser: null,
    buying: [],
    status: null
}

//אקשן מיוחד- אקשן אסינכרוני- מאפשר לבצע קריאות  לשרת 
export const getAllUser = createAsyncThunk(
    'product/getAllUser', async (thunkAPI) => {
        const res = await fetchAllUser()
        return res
    },
)

export const addUser = createAsyncThunk(
    'product/addUser', async (user, thunkAPI) => {
        const res = await postUser(user)
        return res
    },
)

export const login = createAsyncThunk(
    'user/login', async (password, thunkAPI) => {
        const res = await loginUser(password)
        return res
    },
)

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.buying.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.buying=state.buying.map(x=>x.filter(y=>y.id!=action.payload));
        },
        logOut: (state) => {
            state.currentUser = null;
            state.status = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllUser.fulfilled, (state, { payload }) => {
                state.arrUser = payload;
            })

            .addCase(addUser.fulfilled, (state, { payload }) => {
                state.arrUser.push(payload);
            })

            .addCase(login.fulfilled, (state, { payload }) => {
                if (payload == "user isn't exist!, please register") {
                    state.status = false;
                    state.currentUser = null;

                }
                else {
                    state.buying=[];
                    state.status = true;
                    state.currentUser = payload;
                }
            })

    }
})
export const { addToCart, logOut, removeFromCart } = userSlice.actions;

export default userSlice.reducer