import { createSlice } from "@reduxjs/toolkit";

export const newFirstNameSlice = createSlice({
    name: 'newFirstName',
    initialState: {
        value: ''
    },
    reducers: {
        updateNewFirstName: (state, action) => {
            state.value = action.payload
        }
    }
});

//sets all actions into variables
export const {updateNewFirstName} = newFirstNameSlice.actions;

//sets all reducers into variables
export default newFirstNameSlice.reducer;