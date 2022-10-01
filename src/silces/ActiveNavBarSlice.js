import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "Dashboard",
};

export const ActiveNavBarSlice = createSlice({
  name: "ActiveNavBar",
  initialState,
  reducers: {
    activeNav: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { activeNav } = ActiveNavBarSlice.actions;

export default ActiveNavBarSlice.reducer;
