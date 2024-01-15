import { configureStore } from "@reduxjs/toolkit";
import queryReducer from "../reducer/queryReducer.js";

export const store = configureStore({
  reducer: {
    queryState: queryReducer,
  },
});
export default store;
