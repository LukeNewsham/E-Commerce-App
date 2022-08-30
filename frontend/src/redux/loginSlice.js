import { createSlice } from "@reduxjs/toolkit";

export const loginData = createSlice({
    name: 'loginData',
    initialState: {
        username: '',
        password: '',
        confirmPassword: ''
    },
    reducers: {
        updateUsername: (state, action) => {
            state.username = action.payload
        },
        updatePassword: (state, action) => {
            state.password = action.payload
        },
        updateConfirmPassword: (state, action) => {
            state.confirmPassword = action.payload
        }
    }
});

//sets all actions into variables
export const {updateUsername, updatePassword, updateConfirmPassword} = loginData.actions;

//sets all reducers into variables
export default loginData.reducer;