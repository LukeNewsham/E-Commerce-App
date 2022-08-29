import {configureStore} from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import newUsernameReducer from './registerSlices/newUsernameSlice';
import newFirstNameReducer from './registerSlices/newFirstNameSlice';
import newLastNameReducer from './registerSlices/newLastNameSlice';
import newEmailReducer from './registerSlices/newEmailSlice';
import newPasswordReducer from './registerSlices/newPasswordSlice';
import basketReducer from './basketSlice.js'
import userReducer from './userSlice.js'

export default configureStore({
    reducer: {
        products: productsReducer,
        newUsername: newUsernameReducer,    
        newFirstName: newFirstNameReducer,
        newLastName: newLastNameReducer,
        newEmail: newEmailReducer,
        newPassword: newPasswordReducer,
        basket: basketReducer,
        user: userReducer
    }
})