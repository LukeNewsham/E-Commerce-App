import { createSlice } from "@reduxjs/toolkit";

export const productDetailsSlice = createSlice({
    name: 'productDetails',
    initialState: {
        value: 'noData'
    },
    reducers: {
        updateProductDetails: (state, action) => {
            state.value = action.payload
        }
    }
});

//sets all actions into variables
export const {updateProductDetails} = productDetailsSlice.actions;

//sets all reducers into variables
export default productDetailsSlice.reducer;