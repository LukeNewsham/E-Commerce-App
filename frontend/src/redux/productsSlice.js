import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        value: []
    },
    reducers: {
        addProducts: (state, action) => {
            state.value = action.payload
        }
    }
});

//sets all actions into variables
export const {addProducts} = productsSlice.actions;

//sets all reducers into variables
export default productsSlice.reducer;