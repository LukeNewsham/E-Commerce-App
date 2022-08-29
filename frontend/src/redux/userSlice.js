import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: 'noData'
    },
    reducers: {
        addUser: (state, action) => {
            state.value = action.payload
        }
    }
});

//sets all actions into variables
export const {addUser} = userSlice.actions;

//sets all reducers into variables
export default userSlice.reducer;