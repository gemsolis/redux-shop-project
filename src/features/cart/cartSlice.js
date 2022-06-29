// Function as Reducer imported in store.js

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

//Invoke the Url of the API
const url = 'https://course-api.com/react-useReducer-cart-project';

// Define the Initial State first

const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
    isLoading: true,
};

//Export and Fetch

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
    return fetch(url).then(resp => resp.json()).catch((err) => console.log(err))
})


// Create Slice defining the keyname and setting the initialState
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart:(state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount -1;
        },
        calculateTotals:(state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
    },
    extraReducers:{
        [getCartItems.pending]:(state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled]:(state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [getCartItems.rejected]:(state, action) => {
            state.isLoading = false;
        }

    },
});


export const {clearCart, removeItem, increase, decrease, calculateTotals} = cartSlice.actions;


//Export Reducer to be able to Import
export default cartSlice.reducer;