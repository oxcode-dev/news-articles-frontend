import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: [],
        user: ''
    },

    reducers: {
        addCart: (state, action) => {
            state.value = action.payload
        },
        addUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { addCart, addUser } = CartSlice.actions
// export const getCarts = (state) => state.cart.value
// export const getUser = (state) => state.cart.user

export default CartSlice.reducer