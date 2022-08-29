import { createSlice } from "@reduxjs/toolkit";

export const newLastNameSlice = createSlice({
    name: 'newFirstName',
    initialState: {
        value: ''
    },
    reducers: {
        updateNewLastName: (state, action) => {
            state.value = action.payload
        }
    }
});

//sets all actions into variables
export const {updateNewLastName} = newLastNameSlice.actions;

//sets all reducers into variables
export default newLastNameSlice.reducer;