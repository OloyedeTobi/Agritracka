import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import predictReducer  from './predictSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        predict: predictReducer,
    },
});
