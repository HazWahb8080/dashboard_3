import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const ActiveNavBarSlice = createSlice({
  name: "ActiveNavBar",
  initialState: {
    value: "Invoices",
  },
  reducers: {
    activeNav: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { activeNav } = ActiveNavBarSlice.actions;

export default ActiveNavBarSlice.reducer;
