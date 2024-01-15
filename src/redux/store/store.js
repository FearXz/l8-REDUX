import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "../reducer/stateReducer.js";

export const store = configureStore({
  reducer: {
    stateReducer: stateReducer,
  },
});
export default store;
