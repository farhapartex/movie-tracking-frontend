import Redux, { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';
import rootReducer from "../_reducers";

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
});

export type AppDispatch = typeof store.dispatch;