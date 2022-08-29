import { createSlice } from "@reduxjs/toolkit";

export const newPasswordSlice = createSlice({
    name: 'newPassword',
    initialState: {
        value: ''
    },
    reducers: {
        updateNewPassword: (state, action) => {
            state.value = action.payload
        }
    }
});

//sets all actions into variables
export const {updateNewPassword} = newPasswordSlice.actions;

//sets all reducers into variables
export default newPasswordSlice.reducer;