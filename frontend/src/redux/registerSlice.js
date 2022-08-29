import { createSlice } from "@reduxjs/toolkit";

export const registerData = createSlice({
    name: 'registerData',
    initialState: {
        newUsername: '',
        newFirstName: '',
        newLastName: '',
        newEmail: '',
        newPassword: '',
    },
    reducers: {
        updateNewUsername: (state, action) => {
            state.newUsername = action.payload
        },
        updateNewFirstName: (state, action) => {
            state.newFirstName = action.payload
        },
        updateNewLastName: (state, action) => {
            state.newLastName = action.payload
        },
        updateNewEmail: (state, action) => {
            state.newEmail = action.payload
        },
        updateNewPassword: (state, action) => {
            state.newPassword = action.payload
        },
    }
});

//sets all actions into variables
export const {updateNewUsername, updateNewFirstName, updateNewLastName, updateNewEmail, updateNewPassword} = registerData.actions;

//sets all reducers into variables
export default registerData.reducer;