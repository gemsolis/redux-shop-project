import {configureStore} from '@reduxjs/toolkit';

//Importing Slice
import cartReducer from './features/cart/cartSlice';
import modalReducer from './features/modalSlice';


export const store = configureStore ({
    // Define the value within the reducer property
    reducer:{
        cart:cartReducer,
        modal:modalReducer,
    },

});

