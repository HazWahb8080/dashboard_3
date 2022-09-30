import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const ActiveNavBarSlice = createSlice({
  name: "ActiveNavBar",
  initialState,
  reducers: {
    activeNavLink: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
  ActiveNavBarSlice.actions;

export default ActiveNavBarSlice.reducer;
