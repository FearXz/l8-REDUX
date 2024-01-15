import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "../reducer/stateReducer";

export const store = configureStore({
  reducer: {
    state: stateReducer,
  },
});

export default store;
