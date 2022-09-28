import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
    name: 'baseket',
    initialState: {
        value: 'noData',
        total: 0
    },
    reducers: {
        addBasket: (state, action) => {
            state.value = action.payload
        },
        addBasketTotal: (state, action) => {
            state.total = action.payload
        }
    }    
});

//sets all actions into variables
export const {addBasket, addBasketTotal} = basketSlice.actions;

//sets all reducers into variables
export default basketSlice.reducer;