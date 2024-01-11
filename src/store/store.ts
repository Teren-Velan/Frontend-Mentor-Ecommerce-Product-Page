import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "../feature/toggle/toggleSlice";
import activeImageSlice from "../feature/selectActiveImage";

export const store = configureStore({
  reducer: {
    toggle: toggleSlice,
    activeImage: activeImageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
