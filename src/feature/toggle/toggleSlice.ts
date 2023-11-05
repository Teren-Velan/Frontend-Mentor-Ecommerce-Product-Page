import type { RootState } from "../../store/store";
import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
  isToggleNavbar: boolean;
}

const initialState: ToggleState = {
  isToggleNavbar: false,
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleNavbar: (state) => {
      state.isToggleNavbar = !state.isToggleNavbar;
    },
  },
});

export const { toggleNavbar } = toggleSlice.actions;

export const selectToggle = (state: RootState) => state.toggle.isToggleNavbar;

export default toggleSlice.reducer;
