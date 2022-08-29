import { createSlice } from "@reduxjs/toolkit";

export const newEmailSlice = createSlice({
    name: 'newEmail',
    initialState: {
        value: ''
    },
    reducers: {
        updateNewEmail: (state, action) => {
            state.value = action.payload
        }
    }
});

//sets all actions into variables
export const {updateNewEmail} = newEmailSlice.actions;

//sets all reducers into variables
export default newEmailSlice.reducer;