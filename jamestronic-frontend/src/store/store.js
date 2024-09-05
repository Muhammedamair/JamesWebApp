import { configureStore } from '@reduxjs/toolkit';
// Import your reducers here when you create them
// import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    // Add your reducers here
    // user: userReducer,
  },
});
