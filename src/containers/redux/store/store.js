import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';
import inputContactSlice from './inputContactSlice';

const store = configureStore({
    reducer: {
        contact: contactReducer,
        inputContact: inputContactSlice,
    },
})

export default store