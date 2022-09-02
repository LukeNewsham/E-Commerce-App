import {configureStore} from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import basketReducer from './basketSlice.js'
import userReducer from './userSlice.js'
import registerDataReducer from './registerSlice';
import loginDataReducer from './loginSlice';
import productDetailsSlice from './productDetailsSlice';

export default configureStore({
    reducer: {
        registerData: registerDataReducer,
        loginData: loginDataReducer,
        products: productsReducer,
        basket: basketReducer,
        user: userReducer,
        productDetails: productDetailsSlice
    }
})