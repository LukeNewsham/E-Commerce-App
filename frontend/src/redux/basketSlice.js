import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
    name: 'baseket',
    initialState: {
        value: []
    },
    reducers: {
        addBasket: (state, action) => {
            state.value = action.payload
        }
    }
});

//sets all actions into variables
export const {addBasket} = basketSlice.actions;

//sets all reducers into variables
export default basketSlice.reducer;