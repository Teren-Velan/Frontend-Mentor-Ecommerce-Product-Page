import type { RootState } from "../../store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ActiveState {
  activeImage: number;
}

const initialState: ActiveState = {
  activeImage: 1,
};

export const activeImageSlice = createSlice({
  name: "activeImage",
  initialState,
  reducers: {
    setActiveImage: (state, action: PayloadAction<number>) => {
      state.activeImage = action.payload;
    },
    handleNextImage: (state, action: PayloadAction<number>) => {
      if (state.activeImage < action.payload) {
        state.activeImage += 1;
      } else {
        state.activeImage = 1;
      }
    },
    handlePreviousImage: (state) => {
      if (state.activeImage > 1) {
        state.activeImage -= 1;
      }
    },
  },
});

export const { setActiveImage } = activeImageSlice.actions;

export const selectToggle = (state: RootState) => state.toggle.isToggleNavbar;

export default activeImageSlice.reducer;
