import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "stateSlice",

  initialState: {
    query: "",
  },

  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = stateSlice.actions;
export default stateSlice.reducer;
