import {configureStore} from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import basketReducer from './basketSlice.js'
import userReducer from './userSlice.js'
import registerState from './registerSlice';

export default configureStore({
    reducer: {
        registerData: registerState,
        products: productsReducer,
        basket: basketReducer,
        user: userReducer
    }
})