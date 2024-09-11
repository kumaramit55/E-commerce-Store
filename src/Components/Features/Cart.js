import { createSlice } from "@reduxjs/toolkit";
import useData from "../Context/DataContex";



const initialState = {
    cart: [],
    totalQunatiy: 0,
    totalPrice: 0
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id)
            if (find >= 0) {
                state.cart[find].Quantity += 1
            }

            else {
                state.cart.push(action.payload)
            }
        },

        getTotal: (state) => {
            let { totalPrice, totalQunatiy } = state.cart.reduce((cardTotal, carditem) => {
                // console.log("cardTotal", cardTotal);
                // console.log("carditem", carditem)
                const { price, quantity } = carditem
                // console.log(price, quantity)
                const itemTotal = price * quantity;
                cardTotal.totalPrice += itemTotal
                cardTotal.totalQunatiy += quantity
                return cardTotal

            },
                {
                    totalPrice: 0,
                    totalQunatiy: 0,
                }


            );
            state.totalPrice = parseInt(totalPrice.toFixed(2))
            state.totalQunatiy = totalQunatiy
        },

        increaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
              if (item.id === action.payload) {
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            });
        },
        decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
              if (item.id === action.payload) {
                return { ...item, quantity: item.quantity - 1 };
              }
              return item;
            });
        },

        removeItem:(state,action)=>{
            state.cart=state.cart.filter((item)=> item.id !=action.payload.id)
        }
    },
})


export const { addToCart, getTotal, increaseItemQuantity, decreaseItemQuantity,removeItem} = CartSlice.actions

export default CartSlice.reducer