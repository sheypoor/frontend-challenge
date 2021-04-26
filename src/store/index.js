import { configureStore, combineReducers } from "@reduxjs/toolkit";

// reducers
import signup from "store/signup";

const appReducer = combineReducers({
  signup: signup,
});

const store = configureStore({
  reducer: appReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
