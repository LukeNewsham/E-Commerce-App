import { createSlice } from "@reduxjs/toolkit";

export const newUsernameSlice = createSlice({
    name: 'newUsername',
    initialState: {
        value: ''
    },
    reducers: {
        updateNewUsername: (state, action) => {
            state.value = action.payload
        }
    }
});

//sets all actions into variables
export const {updateNewUsername} = newUsernameSlice.actions;

//sets all reducers into variables
export default newUsernameSlice.reducer;