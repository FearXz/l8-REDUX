import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "query",

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
