import {configureStore} from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import newUsernameReducer from './registerSlices/newUsernameSlice';
import newFirstNameReducer from './registerSlices/newFirstNameSlice';
import newLastNameReducer from './registerSlices/newLastNameSlice';
import newEmailReducer from './registerSlices/newEmailSlice';
import newPasswordReducer from './registerSlices/newPasswordSlice';

export default configureStore({
    reducer: {
        products: productsReducer,
        newUsername: newUsernameReducer,    
        newFirstName: newFirstNameReducer,
        newLastName: newLastNameReducer,
        newEmail: newEmailReducer,
        newPassword: newPasswordReducer,
    }
})