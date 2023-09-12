import {createSlice} from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        products: [],
        total: 0,
        quantity: 0
    },
    reducers: {
        addProduct2: (state, action) => {
            state.products.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
        }

    }
})

export const {addProduct2} = wishlistSlice.actions;
export default wishlistSlice.reducer;