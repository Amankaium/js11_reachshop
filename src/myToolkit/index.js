import { configureStore } from '@reduxjs/toolkit';
// import themeReducer from "../shopredux/reducer";
import themeReducer from '../myToolkit/themeSlice';

export const store = configureStore({
    reducer: {
      theme: themeReducer,
    },
})