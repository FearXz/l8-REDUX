import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "query",

  initialState: {
    query: "",
    data: [],
    dataFiltered: [],
  },

  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setDataFiltered: (state, action) => {
      state.dataFiltered = action.payload;
    },
  },
});

export const { setQuery, setData, setDataFiltered } = stateSlice.actions;
export default stateSlice.reducer;
