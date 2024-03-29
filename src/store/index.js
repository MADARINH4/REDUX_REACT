import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }, // Work of multiple slices
});

export default store;
