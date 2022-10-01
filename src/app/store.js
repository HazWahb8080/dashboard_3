import { configureStore } from "@reduxjs/toolkit";
import ActiveNavBarReducer from "../silces/ActiveNavBarSlice";

export const store = configureStore({
  reducer: { activeNavLink: ActiveNavBarReducer },
});
