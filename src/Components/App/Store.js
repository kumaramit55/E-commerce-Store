import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../Features/Cart' 

export const Store=configureStore({
    reducer:{allcarts:cartReducer},
    
})